const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const util = require('../util/util');
const _ = require("../util/underscore");

const questionSchema = new Schema({
    text: {
        type: String,
        required: true,
    },

    sender: {
        username: {type: String, required: true},
        _id: mongoose.Schema.Types.ObjectId
    },

    destination: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
})

questionSchema.pre("save", async(next) => {
    const question = this;


})


module.exports = mongoose.model("Question", questionSchema)