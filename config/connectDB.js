//connection DB:
const mongoose = require('mongoose'); //requier mongoose   D/ npm i mongoose

//Asynchrone:
const connectDB=async()=>{ 
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      UseUnifiedTopology: true
    })
    console.log("DataBase (MongoDB) connected")
  } catch(error){ 
    console.log("DataBase (MongoDB) connection failed", error) 
  }
};

module.exports = connectDB;