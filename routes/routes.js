const express = require('express');
const router = express.Router();

const authController = require("../controllers/authController");
const appController = require("../controllers/appController");
const passport = require('passport');


// router.post("/register", authController.registerUser);
router.get("/users", appController.getUsers);

router.get("/login", appController.loginPage);
router.get("/login/twitter",
    passport.authenticate('twitter'));
router.get("/login/twitter/return",
    passport.authenticate('twitter', {failureRedirect: '/login'}),
    appController.loginSuccessfulRedirect);
router.get("/signup", appController.signupPage);

router.post("/login", authController.loginUser);
router.post("/signup", authController.registerUser);

router.post("/ask", appController.askQuestion);

router.get("/profile", appController.getProfile)

// export the router
module.exports = router;