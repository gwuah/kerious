const User = require("../models/User");
const _ = require("../util/underscore");
const util = require("../util/util");


exports.registerUser = async (req, res) => {
    req.body.username = req.body.username.toLowerCase();

    try {
        const newUser = await (User(req.body));
        const token = await newUser.generateAuthToken();
        const cookie = util.createCookie(newUser, token);
        res.cookie("kerious", token).json(newUser)

    } catch (e) {
        // res.status(400).send(e)

        if (/email/.test(e.message)) {
            res.render("signup", {err: "Email already taken"})
        } else if (/username/.test(e.message)) {
            res.render("signup", {err: "Username already taken"})
        } else {
            console.log(e)
            res.send(e)
        }
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        if (!user) return res.render("login", {err: "Authentication Failed"})
        res.send(req.body)
    } catch (error) {
        console.log(e)
        res.send(error)
    }
}