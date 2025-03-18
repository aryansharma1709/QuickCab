const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be at least 3 characters']
        },
        lastname:{
            type:String,
            minlength:[3,'Last name must be at least 3 characters']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be at least 5 characters']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    }
})
// token genrate karne ke liye hai ye
// jwt.sign(user, secretKey, { expiresIn: '1h' });
userSchema.methods.generateAuthToken=function (){
    const token=jwt.sign({ _id:this._id},process.env.JWT_SECRET);
    return token;
}
// password verify karne ke liye hai 
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
// isme statics ka use ye hai ki wo model ke saath kaam karta hai 
// methods instance ke saath kaam karte hai aur iska this point karta hai  instance ko aur static ka this model ko
// saltround =10 isliye use kiya hai industry standard hai aur secure or fast dono hai 
userSchema.statics.hashPassword=async function(password)
{
    return await bcrypt.hash(password,10);
}
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;