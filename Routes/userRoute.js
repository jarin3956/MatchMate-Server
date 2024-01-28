const express = require('express');
const user_route = express();

user_route.post('/register');


module.exports = user_route;