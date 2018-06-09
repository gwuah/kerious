const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const util = require('../util/util');
const jwt = require("jsonwebtoken");
const _ = require("../util/underscore");
require('dotenv').load({ path: '../.env' });


const userSchema = new Schema({
	username: { 
		type: String, 
		required: "Please Add A Name",
		unique: true
	},
	email: { 
		type: String,
		required: "Supply a valid email",
		unique: true,
		trim: true
	},
	password: { 
		type: String,
		required: "Supply a password pls",
		trim: true
	},
	tokens: [{
		access: { type: String, required: true},
		token: { type: String, required: true}
	}],
	userProfileUrl: String,
	userAvatarUrl: String,
});

userSchema.methods.toJSON = function() {
	const user = this;
	const userObject = user.toObject();

	const returnable = _.pick(userObject, ["_id", "email", "username", "userProfileUrl", "userAvatarUrl"])

	return returnable
}

userSchema.methods.generateAuthToken = async function() {
	const user = this;
	const access = "auth";
	const token = jwt.sign({_id: user._id.toHexString(), access}, process.env.SESSION_SECRET).toString();

	user.tokens.push({ access, token });

	const response = await user.save();

	return token
}

userSchema.methods.removeToken = async function(token) {
	const user = this;
	try {
		const temp = await user.update({
			$pull: {
				tokens: { token }
			}
		})
		return { status:true , logout: "successful", token}
	} catch (e) {
		console.log(e);
		return { status:false , logout: "unsuccessful", token}
	}
}

userSchema.statics.findByToken = async function(token) {
	const User = this;
	let decoded;

	try {
		decoded = jwt.verify(token, process.env.SESSION_SECRET)
	} catch (e) {
		console.log(e);
		return undefined
	}

	try {
		const user = await (User.findOne({ "_id": decoded._id, "tokens.token": token, "tokens.access": "auth"}));
		return user
	} catch (e) {
		console.log(e);
		return undefined
	}

}

// userSchema.statics.findByCredentials = async function(email, password) {
// 	const User = this;
// 	const user = await User.findOne({$or: [{ email: email }, { username: username }]});

// 	if (!user) {
// 		return undefined
// 	}

// 	const status = await util.comparePassword(password, user.password);

// 	if (status) {
// 		return user
// 	} else {
// 		return undefined
// 	}
// }

userSchema.statics.findByUsername = async function(username) {
	const User = this;
	const user = await User.findOne({username});

	if (!user) return null

	return user
}

userSchema.pre("save", async function(next) {
	const user = this;

	if (user.isModified("password")) {
		const hashedPass = await util.hashPassword(user.password);
		user.password = hashedPass;
	} else {

	}

	user.userProfileUrl = util.generateProfileUrl(user.username);
	user.userAvatarUrl = util.generateAvatarUrl(user.username);

	next()
	
})



module.exports = mongoose.model("User", userSchema)
