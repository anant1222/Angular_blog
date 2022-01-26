const express = require('express')
const routes = express.Router()
const controller = require('./controllers')
const validate = require('./requests')
routes.post('/addTask',controller.addTaskController);

module.exports = routes;