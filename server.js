//Authentication: when I enter to web site should i do register(to do account) and then login (to enter to my account).
//should have "stratégie de securite"(is like security of hotel(local storge or key or session) if see that u have bracelet(token)let u in it, if not kik u out) when I do any operations into my account(update-add article-delete...) before u do any operation System doing a verification if it's the same user that he create the account or someone who Pirate the account. Then should have something like a key to do verification!!!
//first I do Register secand when i do login than automaticly he give me like key name "TOKEN"b JWT(Into it I put my data but not my password because they can pirate me quickly) than System compare between the tow token and if is the same that me is the right user than he will laisser passer to do the operations and if different token he didn't let u do the operation.

require('dotenv').config(); //Importation dotenv (shoud write at the begining if is not maybe will not read it)
const express = require('express'); //8. Require express       //7. B.."""npm i express""" Install Express to create package-local.json Alwayse In all proj

const connectDB = require('./config/connectDB'); // Require connectDB
const user = require('./routes/user'); //39.import

const passport = require('passport'); //75.       another meth: "  const cors = require('cors')   "

const app = express(); //Init express       
app.use(passport.initialize()); //76.       another meth: "  app.use(cors()) ""

//6.   //4---Parse data to json---: Middleware               
app.use(express.json()); //43.     //42. M.Atlas - Data Base- view Monitoring-collection
//5.   //3---Routes---:
app.use("/user", user); //40
//4.   //2---Connect DB---:
connectDB();
//3.   //1---Run server---:          //2. A.."""npm init -y""" create package.json       //1. server.js
const PORT = process.env.PORT || process.env.port; //Create server if my port reserver take another port   C/npm i dotenv (access to model .env)
app.listen(PORT, error=>{
    error ? console.log("Failed to connect to server", error)
          : console.log(`Server is running on port ${PORT}`)
});