//routes clean and "ilem" all thing. inedi to middleware and controllers (ft) 
const express = require("express"); //34.I need express to take from him router
const {registerUser, UserLogin} = require("../controllers/user.controller"); //37.imp from user.controller.js (path)
const {registerRules, validator} = require("../middlewares/validator");//56.imp registerRules
const isAuth = require("../middlewares/passport-setup"); //81.

const Router = express.Router(); //35.

Router.post('/register', registerRules(), validator, registerUser); //36. corpac ft    //55.nedi 1(registerRules: n3abi tab) / 2(validator: tcheck esque m3abia wella ferga)
// Router.post("/test", (req,res) => {res.status(200).json({msg : "ok"})})
Router.post('/SignIn', UserLogin); //58a.post:bech nda5al fl req.body email w password whwa bech ib3athhom lDataBase
//58b.testing in Postman- POST- http://localhost:7000/user/login - {"email": "flen@gmail.com","password": "i7eb faltena"}

Router.get('/currentuser', isAuth(), (req, res)=>res.json(req.user) ) //80a.
////80b.testing in Postman-GET- http://localhost:7000/user/currentuser -Headers-Authorization-copy token from any user-send-i will see data for the user 

module.exports = Router; //38. All into router that why not exports default

//finish back-end   81.b. cmd-"""create-react-app client"""-npm start-in sign up right user-inspect-redux-state(loading:false)-click sign up when I do inspect i see data.
                //81.a. run two server in the same time """npm install -g concurrently""" ASK SLIM MAMCHETLICH???????