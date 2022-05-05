   //bech nsna3 "Ft"(bech tsna3li tab iraja3 mess des err ken fama galta fi ay mte3 chant data exp:fullName...) bech tchecki data(9bal mansna3 tab ntcheki chant), a traver "Theard Partie Middleware"(ye5ou tab w itesti 3lih ken ferag: i3adi el ft next eli 3mltha bl registerUser / ken m3abi: ireja3 tab des err eli fl front njm ne5ou mnou w nafichie les err mte3i) bech ninstalih bl "express validator"
//50.middlewares: stratigie de securiter (passport JS)      
//51.validator.js 
//52.npm i express-validator

const {check, validationResult} = require("express-validator"); //52.a. //54.b.

exports.registerRules = () => [
   check(`fullName`, `Full name is required`).notEmpty(),
   check(`email`, `Email is required`).notEmpty(),
   check(`email`, `This is not a valid email`).isEmail(),
   check(`password`, `Password is required`).notEmpty(),
   check(`password`, `Password must contain at least 6 characters`).isLength({min: 6, max: 20}),
   check(`phone`, `Phone is required`).notEmpty(),
   check(`phone`, `This is not a valid phone`).isLength({ min: 8})
]; //53.sna3t ft eli bech i3abili middleware mte3i, ntchecki kol chant de data(9bal mansna3 tab)

/*
exports.loginRules = () => [
  check(`email`, `Email is required`).isEmail(),
  check(`email`, `This is not a valid email`).isEmail(),
  check(`password`, `Password must contain at least 6 characters`).isLength({min: 6, max: 20})
];
*/ //ASK SLIM A3LEH MA3MLNEHECH
exports.validator=(req, res, next)=>{ 
    const errors = validationResult(req); //54.a.objet predefini fiwst express-validator "validationResult" HETHA bech irja3 tab
    errors.isEmpty() ? next() : res.status(400).json({errors: errors.arrays() }); //HETHA bech irja3 tab fih err
}; //54.bech nsna3 middleware a traver validator ("Theard Partie Middleware"(ye5ou tab w ytesti 3lih ken ferag: i3adi el ft next eli 3mltha bl registerUser / ken m3abi: ireja3 tab des err eli fl front njm ne5ou mnou w nafichie les err mte3i) bech ninstalih bl "express validator"