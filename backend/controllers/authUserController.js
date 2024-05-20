const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenBlacklist = require("../models/tokenBlacklist");

module.exports = {
  register: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = new User({ username, email, password });
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      console.log(`User registered: ${user.email}`);

      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      
      // If not found, check if it's a username
      if (!user) {
        user = await User.findOne({ username: username });
      }
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      console.log(`User logged in: ${user.email}`);

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  logout: async (req, res) => {
    const token = req.token;
    try {
      await tokenBlacklist.create({ token });

      console.log(`User logged out: ${req.user.email}`);

      res.status(200).json({ msg: "Logged out successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};