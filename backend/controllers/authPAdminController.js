const PAdmin = require("../models/PAdminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenBlacklist = require("../models/tokenBlacklist");

module.exports = {
  register: async (req, res) => {
    const { adminName, firstName, lastName, email, password } = req.body;
    try {
      let padmin = await PAdmin.findOne({ adminName }) 
      if (padmin) {
        throw new Error("Username already exists. If yours, try logging in");
      } 
      padmin = await PAdmin.findOne({ email });
      if (padmin) {
        throw new Error("User email already exists. If yours, try logging in");
      }
      padmin = new PAdmin({ adminName, firstName, lastName, email, password });
      await padmin.save();
      const token = jwt.sign({ id: padmin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      console.log(`User registered: ${padmin.email}`);

      res.status(201).json({ token, msg: "Admin Registered" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    const { adminName, email, password } = req.body;
    try {
      let padmin = await PAdmin.findOne({ email: email });
      
      // If not found, check if it's a username
      if (!padmin) {
        padmin = await PAdmin.findOne({ adminname: adminName });
      }
      if (!padmin) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, padmin.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const token = jwt.sign({ id: padmin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      console.log(`User logged in: ${padmin.email}`);

      res.json({ token, msg: "Admin Loggedin" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  logout: async (req, res) => {
    const token = req.token;
    try {
      await tokenBlacklist.create({ token });

      console.log(`User logged out: ${req.padmin.email}`);

      res.status(200).json({ msg: "Admin Logged out successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
