const express = require('express')
const routes = express.Router()
const controller = require('./controllers')
const validate = require('./requests')
// routes.post('/addTask', validate.realToVip, controller.realToVip);

module.exports = routes;