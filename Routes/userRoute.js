const express = require('express');
const user_route = express();
const user_controller = require('../Controller/userController');

user_route.post('/register',user_controller.userRegister);

module.exports = user_route;