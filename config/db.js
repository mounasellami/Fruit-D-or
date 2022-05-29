const mongoose = require('mongoose');
const config = require('config');
const db = config.get("MONGO_URI"); 

const connectDB =async()=>{
   try{
      await mongoose.connect(db,
         { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("MongoDB database connected")
   } catch(err){
    console.log("DataBase (MongoDB) connection failed", error)
   }
}

module.exports=connectDB;
