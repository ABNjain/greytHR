const jwt = require("jsonwebtoken");
const User = require("../models/UserModel.js");
const tokenBlacklist = require("../models/tokenBlacklist.js");

module.exports = {
  authenticateUser: async (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({ msg: "Authorization header is missing" });
    }

    const token = authHeader.replace("Bearer ", "");

    // Check if the token is blacklisted
    const blacklisted = await tokenBlacklist.findOne({ token });
    if (blacklisted) {
      return res.status(401).json({ msg: "Token is blacklisted" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ _id: decoded.id });

      if (!user) {
        return res.status(401).json({ msg: "User not found" });
      }

      req.token = token;
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ msg: "Invalid token" });
    }
  },

  
};
