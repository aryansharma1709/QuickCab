const mongoose=require('mongoose');

// ye token hum create kar rhe hai for logout mtlb blacklist token me ahi wo token to logout kar do
// iska model is liye bana rhe hai kyuki bht saare blacklist token bante jayege to ek time ke baad delete ho jaye uske liye us rhe hai 
// TTL (time to live ) ki ek particular time ke baad wo token delete ho jayega database me se

const blacklistTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{type:Date,
        default:Date.now,
        expires:86400   //24 hours in sec
    }
})

module.exports=mongoose.model('blacklistToken',blacklistTokenSchema);