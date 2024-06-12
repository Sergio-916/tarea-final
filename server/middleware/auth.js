const jwt = require("jsonwebtoken");
require("dotenv").config();
const authToken = (req, res, next) => {
  try {
    console.log("before auth");
    console.log('Headers:', req.headers);
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(token);
    if (!token) return res.status(403).json({ message: "User not logged in" });
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.email = decoded;
    console.log("user auth", decoded);
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};

module.exports = authToken;
