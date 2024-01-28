const express = require('express');
const admin_route = express();
const admin_controller = require('../Controller/adminController');

admin_route.post('/test',admin_controller.getTestData);


module.exports = admin_route