const jwt = require('jsonwebtoken');
const userData = require('../Model/userModel');

const userVerfy = async (req,res,next) => {
    const token =  req.headers.authorization.split(' ')[1] || null;
    if(!token){return res.status(401).send({auth: false, message:'No token provided',user:'user'})}
    
    try {
        const decoded = jwt.verify(token, process.env.USER_SECRET);
        const {role} = decoded;
        if(role !== 'user'){return res.status(403).send({auth: false, message:'Forbidden',user:'user'})}

        const user = await userData.findById(decoded.userId);
        if (!user) { return res.status(404).send({ auth:false,message:"User not found" })};
        req.decodedUser = decoded;
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token', user:'user' });
    }
}

module.exports = {
    userVerfy
};