//def structure Schema:
const mongoose = require('mongoose'); //requier mongoose
const userSchema = new mongoose.Schema({
    //id: this.populate(), //Require Schema from mongoose & Create user schema
 fullName: {type: String},
 email: {type: String, unique : true},
 password: {type: String},
 phone: {type: Number}
}); //declare parameter    required : true
module.exports = User = mongoose.model("Users", userSchema); //create model