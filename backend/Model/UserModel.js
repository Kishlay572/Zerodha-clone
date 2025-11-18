const { model } = require("mongoose");

const UserSchema = require("../Schema/UserSchema");

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
