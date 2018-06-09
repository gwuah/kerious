const express = require('express');
const router = express.Router();

const authController = require("../controllers/authController");
const appController = require("../controllers/appController");


router.post("/register", authController.registerUser)
router.post("/ask", appController.askQuestion)

// export the router
module.exports = router;