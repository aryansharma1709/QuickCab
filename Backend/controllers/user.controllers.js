const userModel=require('../models/user.model');
const userService=require('../services/user.services');
const {validationResult} =require('express-validator')

// register controller hai  ye
module.exports.registerUser=async(req,res,next)=>{
        const  errors=validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors : errors.array()});
        }
        const {fullname,email,password}=req.body;
        const hashedPassword=await userModel.hashPassword(password);
        const user =await userService.createUser({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password:hashedPassword
        })
        const token = user.generateAuthToken();
        res.status(201).json({token,user})
}

// login controller hai ye 
module.exports.loginUser=async(req,res,next)=>{
     const errors=validationResult(req);
     if(!errors.isEmpty())
     {
        return res.status(400).json({errors:errors.array()});
     }
     const {email,password}=req.body;
    //  isme humne select me +password isliye diya hai kyuki usermodel se jo password aa rha hia wo password bhi leke aaye
     const user= await userModel.findOne({email}).select('+password');
     if(!user)
     {
        return  res.status(401).json({message:'Invalid email or password'});
     }
     const isMatch =await  user.comparePassword(password);
     if(!isMatch)
     {
        return  res.status(401).json({message:'Invalid email or password'});
     }
     const token=user.generateAuthToken();
     res.status(200).json({token,user});
}