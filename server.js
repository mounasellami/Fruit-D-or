//Authentication: when I enter to web site should i do register(compte) and then login (to enter to my compte).
//lezem ikoun 3andna "stratigie de securite" ki na3ml ay opperations fwest compte(delete-abdate...) systeme i3awed ithabat l'utilistaeur eli ista3ml hwa bidou moula compte wella la.
//when i do register to add user(DataBase) when i take userName&password when i do login he give me like key "token", lisser passer hwa wa7dou ie5ou token eli 3andi w data mte3 user eli moula lprofile s7i7 ia3ml comparison ken hwa cbon i3adini 3al operation mte3i.

require('dotenv').config(); //Importation dotenv (shoud write at the begining if is not maybe will not read it)
const express = require('express'); //Require express       A/"npm init -y" create package.json

const connectDB = require('./config/connectDB'); // Require connectDB
const user = require('./routes/user'); //39.import

const passport = require('passport'); //75.       another meth: "  const cors = require('cors')   "

const app = express(); //Init express       //7.B/"npm i express" Install express create package-local.json
app.use(passport.initialize()); //76.       another meth: "  app.use(cors()) ""

//6. //4--- Parse data to json: Middleware               
app.use(express.json()); //43.     //42. M.Atlas - Data Base- view Monitoring-collection
//5. //3--- Routes:
app.use("/user", user); //40
//4. //2--- Connect DB:
connectDB();
//3. //1--- Run server:          //2.npm init -y  //1.server.js
const PORT = process.env.PORT || process.env.port; //Create server if my port reserver take another port   C/npm i dotenv (access to model .env)
app.listen(PORT, error=>{
    error ? console.log("Failed to connect to server", error) 
          : console.log(`Server is running on port ${PORT}`)
});