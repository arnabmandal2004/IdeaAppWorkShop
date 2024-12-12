// This will hold the schema for the user
//It explains the different fields of use and how  it will stored in the mongodb 
const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        typr:String,
        require:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        typr: String,
        required:true
    },
    email:{
        typr: String,
        required:true,
        unique:true,
        minlength:10,
        lowercase:true
    },
    userType:{
        typr: String,
        required:true,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    }
},{timestamps:true});

module.exports=mongoose.model("User",userSchema);