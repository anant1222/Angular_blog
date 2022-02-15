const express=require('express');
const routes=express.Router();
// const middleware=require('../middleware/index');
const validation = require('./requests')
const controller=require('./controllers');
routes.post("/user/add", controller.addTaskController);
routes.get("/user/list", controller.getUserController);
routes.post("/user/data",validation.userDetails, controller.userDetailsController);
module.exports= routes;