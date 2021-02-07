const User = require("../models/user.model");

exports.register = async (req, res, _next) => {
  const new_user = new User(req.body);
  await new_user.save();
  res.status(201).json({ success: true, user: new_user });
};

exports.users = async (_req, res, _next) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });
};
