const express=require('express');
const route=express.Router();

const deleteController=require('../controllers/delete_controller');

route.post('/delete',deleteController.delete);

module.exports= route