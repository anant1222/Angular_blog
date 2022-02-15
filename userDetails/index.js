const express=require('express');
const routes=express.Router();
// const middleware=require('../middleware/index');
const controller=require('./controllers');
routes.post("/user/add", controller.addTaskController);
routes.get("/user/list", controller.getUserController);
module.exports= routes;