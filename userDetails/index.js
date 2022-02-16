const express=require('express');
const routes=express.Router();
// const middleware=require('../middleware/index');
const validation = require('./requests')
const controller=require('./controllers');

// uses into mysql db

routes.post("/user/add", controller.addTaskController);
routes.get("/user/list", controller.getUserController);

//mongo

routes.get("/user/data/list",controller.listUserDetailsController);
routes.post("/user/data/add",validation.userDetails, controller.userDetailsController);
routes.post("/user/data/update",validation.updateUserDetails, controller.updateUserDetailsController);
routes.get("/user/data/delete", controller.deleteUserDetails);
module.exports= routes;