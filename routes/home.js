const express= require('express');
const homeController=require('../controllers/home_controller');
const route =express.Router();

route.get('/',homeController.home);
route.use('/',require('./addTasks'))
route.use('/',require('./delete'));
module.exports=route;