const captainController=require('../controllers/captain.controller')
const express= require('express');
const router=express.Router();
const {body }=require('express-validator');
router.post('/register',[
      body('email').isEmail().withMessage('Invlaid Email'),
      body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 character long'),
      body('password').isLength({min:6}).withMessage('password must be 6 character'),
      body('vehicle.color').isLength({min:3}).withMessage('Color  must be at least 3 character'),
      body('vehicle.plate').isLength({min:3}).withMessage('Plate  must be at least 3 character'),
      body('vehicle.capacity').isInt({min:1}).withMessage('Capacity  must be at least 1 sitting'),
      body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicleType')

],captainController.registerCaptain)
module.exports=router;