const userService = require('../Service/userService');

const userRegister = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        const result = await userService.registerUser(name, email, password, age);
        res.status(result.status).json({ message: result.message, user: result.user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const userLogin = async (req,res) => {
    try {
        const {email,password} = req.body;
        console.log(email,password);
        const result = await userService.loginUser(email,password);
        res.status(result.status).json({ message: result.message, user: result.token });
        
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

module.exports = {
    userRegister,
    userLogin
};
