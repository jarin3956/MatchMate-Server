const userData = require('../Model/userModel');
const argon2 = require('argon2');

const securePass = async (password) => {
    const hash = await argon2.hash(password);
    return hash;
}

const registerUser = async (name, email, password, age) => {
    try {
        const userFound = await userData.findOne({ email: email });

        if (userFound) {
            return { status: 409, message: 'Email already used' };
        }

        const spassword = await securePass(password);
        const user = new userData({
            name,
            email,
            age,
            password: spassword
        });

        if (user) {
            let userSave = await user.save();
            if (userSave) {
                return { status: 200, message: 'User Created', user };
            } else {
                return { status: 400, message: 'Failed to save user' };
            }
        } else {
            return { status: 400, message: 'Failed to save user' };
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerUser
};
