const mongoose = require("mongoose");
const {Record} = require("./recordModel");

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    recordList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Record"
    }]
})

const User = new mongoose.model("User",userSchema);

module.exports = {User};