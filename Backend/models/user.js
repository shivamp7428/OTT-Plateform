import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        requiredL:true,
    },
    otp:{
        type:String
    },
    expiresAt:{
        type:Date,
       
     },
},{
    timestamps:true,
})


export default mongoose.model("User" , UserSchema)