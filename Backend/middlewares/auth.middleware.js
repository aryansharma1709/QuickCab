const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports.authUser=async(req, res, next)=>{
    //  token ko 2 jagah check karenge ki ya to wo header me hoga ya cookies me agar nhi hai to
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    const isBlackListed=await userModel.findOne({token:token})
    if(isBlackListed)
    {
        return res.status(401).json({message:"unauthorized Access"}); 
    }

    if(!token)
    {
        return res.status(401).json({message:"unauthorized Access"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        // jitna create karne par diya the utna hi data decode karne par milega
        const user= await userModel.findById(decoded._id)
        req.user=user;
        return next();
    }
    catch(err){
        return res.status(401).json({message:"unauthorized Access"});
    }
}