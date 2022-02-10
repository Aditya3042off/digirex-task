const express = require("express");
const router = express.Router();

const {authUser,registerUser, getReports} = require("../controllers/userControllers");
const {protect} = require("../middlewares/authMiddleware");

router.route("/login").post(authUser);
router.route("/signup").post(registerUser);
router.route("/dashboard").get(protect,getReports);

module.exports = router;