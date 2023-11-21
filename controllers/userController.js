const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (!users) {
      res.status(404).json({ message: "Users not found" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.createUser = async (req, res) => {
  try {
    let newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.updateUser = (req, res) => {
  try {
    let user = User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.deleteUser = (req, res) => {
  try {
    let user = User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
