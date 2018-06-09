const _ = require("./underscore");
// const User = require("../models/User");
const bcrypt = require("bcryptjs");


 exports.productName = "kerious"

 exports.generateProfileUrl = (username) => {
    return `/${username}`
 }

 exports.generateAvatarUrl = (usernamel) => {
     return "https://avatars0.githubusercontent.com/u/30000"
 }

 exports.createCookie = (user, token, role) => {
	let owner;
	
	if (role == "administrator") {
		owner = _.pick(user.toObject(), ["_id", "username", "adminProfileUrl", "adminAvatarUrl"]);
	} else {
		owner = _.pick(user.toObject(), ["_id", "username", "email", "userProfileUrl", "userAvatarUrl"]);
	}

  const cookie = {
    user: owner,
    token: token
  };

  return JSON.stringify(cookie)
}

exports.hashPassword = (password) => {
	return new Promise((res, rej) => {
		bcrypt.genSalt(10, (err, salt) => {
			if (err) { rej(err) }
			bcrypt.hash(password, salt, (err, hash) => {
				if (err) { rej(err) }
				res(hash)
			})
		})
	})
}

exports.comparePassword = (password, hashedPassword) => {
	return new Promise((res, rej) => {
		bcrypt.compare(password, hashedPassword, (err, status) => {
			if (err) { rej(err) }
			// console.log(status);
			res(status)
		})
	})
}
