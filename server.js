const express=require('express')
const serverConfig=require('./configs/server.config')
const mongoose=require('mongoose')
const dbConfig=require('./configs/db.config')
const userModel=require('./models/user.model')
const bcrypt=require('bcrypt')

const app=express()

//Logic to connect mongodb and create an admin user
//Need to have the mongodb up and running in your local machine
mongoose.connect(dbConfig.DB_URL)
const db=mongoose.connection
db.on("error",()=>{
    console.log("Error while connecting to DB")
});

db.once("open",()=>{
    console.log("DB is connected")
    init()

})

async function init(){
    // check admin user is present
  let admin= await userModel.findOne({
    userId:"admin"
  })
  if(admin){
    console.log("Admin user already present")
    return
  }
    // initialize the mongodb
    //Need to create  admin user

    
    admin = await userModel.create({
        name: "Arnab Mandal",
        userId:"admin",
        email:"mandal.arnab2004@gmail.com",
        userType:"ADMIN",
        password: bcrypt.hashSync("welcome",8)
    });
    console.log(admin)
}


app.listen(serverConfig.PORT,()=>{
    console.log(`Surver started on the port number ${serverConfig.PORT}`)
})