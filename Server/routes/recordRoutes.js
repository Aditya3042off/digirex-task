const express = require("express");
const router = express.Router();

const {searchRecords,saveRecord} = require("../controllers/recordControllers");
const {protect} = require("../middlewares/authMiddleware");

router.route("/save").post(protect,saveRecord);
router.route("/search").get(protect,searchRecords);

module.exports = router;
