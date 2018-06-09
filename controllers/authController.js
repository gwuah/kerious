const User = require("../models/User");
const _ = require("../util/underscore");
const util = require("../util/util");


exports.registerUser = async (req, res) => {
    try {
        const newUser = await (User(req.body));
        const token = await newUser.generateAuthToken();
        const cookie = util.createCookie(newUser, token);
        res.cookie("kerious", token).json(newUser)

    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}

exports.loginUser = async (req, res) => {
    console.log(req.body)
    res.send(req.body)
}