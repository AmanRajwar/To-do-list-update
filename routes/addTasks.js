

const express=require('express');
const route=express.Router();
 const addTaskController = require('../controllers/addTasks_controller');

 route.post('/tasks',addTaskController.addTasks);

 module.exports = route;


