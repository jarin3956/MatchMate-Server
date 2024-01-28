const express = require('express');
const user_route = express();
const user_controller = require('../Controller/userController');

user_route.get('/test',user_controller.getTestData);

module.exports = user_route;