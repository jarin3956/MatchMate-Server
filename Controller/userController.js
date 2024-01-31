const testData = require('../Model/testModel');
const userData = require('../Model/userModel');
const argon2 = require('argon2');

const getTestData = async (req, res) => {
    try {
        const testDataDocuments = await testData.find({});
        if (testDataDocuments) {
            console.log('Documents in testData collection:', testDataDocuments);
            res.status(200).json({ message: 'testData found', data: testDataDocuments });
        } else {
            res.status(404).json({ message: 'testData not found' });
        }
    } catch (error) {
        console.error('Error logging testData documents:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const securePass = async (password) => {
    const hash = await argon2.hash(password);
    return hash;
}

const verifyHash = async  (password,hash) => {
    try {
        const valid = await argon2.verify(hash, password);
        return valid 
    } catch (error) {
        console.log(error.message);
    }
}

const userRegister = async (req, res) => {
    try {
        const { name,email,password,age } = req.body;
        console.log(name,email,password,age);
        const userFound = await userData.findOne({ email:email });
        if (userFound) {
            res.status(409).json({message:'Email already used'})
        } else {
            const spassword = await securePass(password);
            const user = new userData ({
                name,
                email,
                age,
                password: spassword
            });
            if (user) {
                res.status(200).json({message:'User Created',user})
            } else {
                res.status(400).json({message:'Failed to save user'});
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error })
    }
}


module.exports = {
    getTestData,
    userRegister
};