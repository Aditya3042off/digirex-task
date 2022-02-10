const { asyncHandler } = require("../utils");
const {Record} = require("../Models/recordModel");
const {User} = require("../Models/userModel");
const {CustomError} = require("../classes/customErrorClass");

//POST /records/save
// PRIVATE ROUTE
const saveRecord = asyncHandler(async(req,res,next) => {
    const id = req.user._id;
    const {name,to,from,notes} = req.body;

    //getting user info from db
    const user = await User.findById(id);

    //saving record to db
    const record = new Record({name,to,from,notes});
    const savedRecord = await record.save();

    //add this record to user and save user again
    user.recordList.push(savedRecord);
    await user.save();

    //getting the saved user from db
    const savedUser = await User.findById(id).select("-password").populate("recordList");

    res.status(200).json({
        name:savedUser.name,
        id:savedUser._id,
        email:savedUser.email,
        recordList:savedUser.recordList
    });
})

//GET /records/search
//PRIVATE ROUTE

const searchRecords = asyncHandler(async(req,res,next) => {
    const id = req.user._id;

    //getting all records from database
    const recordsList = await Record.find({});
    if(!recordsList) throw new CustomError("No Medical Reports Found",404);

    //sending data to frontend
    res.status(200).json({recordsList});
})

module.exports = {saveRecord,searchRecords};