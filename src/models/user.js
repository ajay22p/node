let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var User =new Schema({
    name:{
        type: String,
        required: [true, "this name is required"],
        lowercase: true
    },
    phone:{
        type:Number,
        required: [true, "this phone is required"]
    },
    email:{
        type:String,
        required: [true, "this email is required"],
        lowercase: true
    },
    password:{
        type:String,
        required: [true, "this email is required"],
        lowercase: true
    }
},{
    timestamps: true
});
module.exports = mongoose.model('User',User);