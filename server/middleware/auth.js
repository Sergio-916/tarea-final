const jwt = require("jsonwebtoken");
require("dotenv").config();
const authToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(token);
    if (!token) return res.status(403).json({ message: "User not logged in" });
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decoded) return res.sendStatus(403).json({ message: "Invalid token" });

    req.email = decoded;
    console.log("user auth", decoded);
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ message: "Token expired" });
    }
  }
};

module.exports = authToken;
