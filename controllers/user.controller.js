//ft into routes is best practices
const User = require('../models/user'); //32.import user / require objet
const bcrypt = require('bcryptjs'); //47.import bcrypt
const jwt = require('jsonwebtoken'); //63.

//1--- Register (Log on) (Sign up)
exports.registerUser = async(req, res) => {
    const user = {...req.body}; //30.check all atribute alone (password-mail...) because we can't do 2 accounts in same email
    const email=user.email; //43.recuperer email from req.body
    const searchRes=await User.findOne({email}); //43.search  to the user in this email
    
    if (searchRes) return res.status(402).json({msg: "Email already exist"}); //44.test if the email u written is exist (return: kick you out) or not (save your email)
    
    try {
        const newUser = await new User({...user}); // 33a.await to copy user (copy schema)     
        const salt=await bcrypt.genSalt(10); //45.npm i bcrytjs   46.rachit ml7: doing a "ft de hachage" to don't see user password (genSalt(niveau de complexiter:2/6/10(ideal)/...kolma ntala3 nb ichd akthar wa9t wikoun akthar securiser))
        const hash =await bcrypt.hash(newUser.password, salt); //48.i make "algorithm de hachage" n9souh 
        
        newUser.password = hash; //49.
        await newUser.save(); //33b.await to copy user and then save(because save in cloud take time)
        res.status(200).json({msg: "You have successfully registered"}); //and if he will don't wait maybe he will don't take 
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: "Failed to register user"}); //31.test postman
    }
}; //n3aiatlou f routes w ba3d server.js


//2--- Login (SignIn)         
exports.UserLogin = async (req, res) => {
    //const login = email || phone   !!!!!!ASK SLIM MAMCHETLICH
    //const { login , password } = req.body //find the user based on email
    const { email , password } = req.body; //find the user based on email
    
    const foundUser = await User.findOne({email});
    if (!foundUser) return res.status(402).json({msg: "Email not exist"}); 
    //console.log(password, user.password); //ncompary password(deja nda5al fih ma req.body) m3a user.password (eli ne5ou fih ml back-end)
    
    const isMatch = await bcrypt.compare(password, foundUser.password); //59.meth ttba3 bcrypt "compare" take a password that his in the back-end to do dechifrement & compaire password (mte3 req.body(front-end)) wbech irej3lna true or false
    //console.log(isMatch)           //60.       //"kanal md5" securité devops
    if (!isMatch) return res.status(401).json({msg: "Bad credential"}); //61.If is false 
    
    const payload={
        id: foundUser._id, 
        email: foundUser.email,
        fullName: foundUser.fullName,
        phone: foundUser.phone
    }; //65.   should Never But my Password because they can pirate me quickly
    try { 
        const token = await jwt.sign(payload, process.env.secretOrKey);
        res.status(200).json({msg: "Login with sucess", token: `Bearer ${token}`}); //66. token: bech nsta3mlha ki ib9a compte ma7loul, fl "jwt"i9oul lezm nanserie token fi chain de caracter w nzidha chain de caracter esmha bearer: hwa suport 9bal makenetch tzedet fi e5er misajour./ki ncopy token eli bech ijini fl postman fii jwt ijibli data eli 3andi
      //67.search "passport.js"/strategies/nkteb jwt/passport-jwt/copy stratigie    (hethom "stratégie de sécurité" ia3ml comparison. there is milion stratigie for gitHub, fb, intagrame, jwt:token)
    } //64.nsna3 token ihez (data, secriteKey) //65.declariha fl .env    //62.npm i jsonwebtoken     (ia3tina token)
    catch(error){ res.status(401).json({msg:"Login failed"}) }; //irja3li mess err mte3i
}; //57.nthabtou 1email mawjoud ou no 2password mawjoud (lezmou isna3 token) ou no (iraja3 err)

//3--- Logout  