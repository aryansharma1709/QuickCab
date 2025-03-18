const express=require('express');
const router =express.Router();
// express validator  package ka use karne  data ko validate karne ke liye

const{body }=require('express-validator')
const userController=require('../controllers/user.controllers')

 router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 character long'),
    // body('fullname.lastname').isLength({min:3}).withMessage('last name must be at least 3 character'),
    body('password').isLength({min:6}).withMessage('password must be 6 character')

 ],userController.registerUser)

 router.post('/login',[
   body('email').isEmail().withMessage('Invalid Email'),
   body('password').isLength({min:6}).withMessage('password must be 6 character')
 ],userController.loginUser)

module.exports=router;