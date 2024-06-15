const express = require('express')

const{login, signup} = require("../controllers/auth")
const{calorie} = require("../controllers/calorie")

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/submitCal", calorie)

module.exports = router