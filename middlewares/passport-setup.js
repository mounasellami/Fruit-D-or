//68. Install passport "npm i passport"
//69. fama module itba3 passport should i instll it "npm i passport-jwt"
//react i5dem bl "web-back" ilem tousqui'est JS wa7dou wa7dou ie5ou 3 fichier. my app will have 3 fichier:js html css w ipressihom iwali kol fichier fi star we7ed
//mch ia3ml extract ll"token" + "secrit key" wi7othom fi objet esmou option.w ba3d bech tt3ada fl header mte3 recket.wa9tly ena ndour fl app hwa 93d ll back end bech ia3raf esque ena user ou non
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;//71.
const passport= require('passport'); //74    //75.best practice nmchi server.js 
const User = require('../models/user'); //78.

let  secretOrKey=process.env.secretOrKey;//72.
let opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//70
    secretOrKey //73
}

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done)=>{
        const {id} = jwt_payload
        const user = await User.findById(id);
        try{
            user ? done(null, user) : done(null, false)
        } catch(error){
           console.log(error)
        }
    })
); //77. traitment stratigie
module.exports = isAuth = () => passport.authenticate('jwt', { session: false });//79.3bara middleware e7na sna3neh //80. nmchi ll router


/*
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

function as the argument to the jwtFromRequest option:

var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
};
Authenticate requests
Use passport.authenticate() specifying 'JWT' as the strategy.

app.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user.profile);
    }
);
*/