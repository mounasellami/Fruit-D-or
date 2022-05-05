const express = require("express"); //34.I need express to take from him router
const {registerUser, UserLogin} = require("../controllers/user.controller"); //37.imp from user.controller.js (path)
const {registerRules, validator} = require("../middlewares/validator");//56.imp registerRules
const isAuth = require("../middlewares/passport-setup"); //81.

const Router = express.Router(); //35.

Router.post('/register', registerRules(), validator, registerUser); //36. corpac ft    //55.nedi 1(registerRules: n3abi tab) / 2(validator: tcheck esque m3abia wella ferga)
// Router.post("/test", (req,res) => {res.status(200).json({msg : "ok"})})
Router.post('/login', UserLogin) //58.post:bech nda5al fl req.body email w password whwa bech ib3athhom lDataBase

Router.get('/currentuser', isAuth(), (req, res)=>res.send(req.user) ) //80.    ASK SLIM WHEN I USE "(req, res)=> res.json(req.user)"
module.exports = Router; //38. All into router that why not exports default
