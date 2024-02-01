const express = require('express');
const user_route = express();
const user_controller = require('../Controller/userController');

user_route.post('/register',user_controller.userRegister);
user_route.post('/login',user_controller.userLogin);
module.exports = user_route;