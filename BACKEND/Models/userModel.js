import  Mongoose  from "mongoose";

const userSchema=new Mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    role:{
        type:Number,
        default:0
    }


},{timestamps:true})

export default Mongoose.model('users',userSchema)