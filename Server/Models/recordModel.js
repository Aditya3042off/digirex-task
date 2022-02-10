const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    from:{
        type:Date,
        required:true
    },
    to:{
        type:Date,
        required:true
    },
    notes:String
})

const Record = mongoose.model("Record",recordSchema);

module.exports = {Record};