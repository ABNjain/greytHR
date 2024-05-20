const jwt = require("jsonwebtoken");
const PAdmin = require("../models/PAdminModel.js");
const tokenBlacklist = require("../models/tokenBlacklist.js");

module.exports = {
    authenticatePAdmin: async (req, res, next) => {
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
      const padmin = await PAdmin.findOne({ _id: decoded.id });

      if (!padmin) {
        return res.status(401).json({ msg: "Padmin not found" });
      }

      req.token = token;
      req.padmin = padmin;
      next();
    } catch (error) {
      res.status(401).json({ msg: "Invalid token" });
    }
  }
}