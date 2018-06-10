const express = require('express');
const router = express.Router();

const authController = require("../controllers/authController");
const appController = require("../controllers/appController");


// router.post("/register", authController.registerUser);
router.get("/users", appController.getUsers);

router.get("/login", appController.loginPage);
router.get("/signup", appController.signupPage);

router.post("/login", authController.loginUser);
router.post("/signup", authController.registerUser);

router.post("/ask", appController.askQuestion);

router.get("/profile", appController.getProfile)
router.get("/logged", appController.loggedPage)

// export the router
module.exports = router;