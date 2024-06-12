const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserController {
  async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(409)
          .json({ message: "User with this email already exists" });
      } else {
        await User.insertMany({ name, email, password: hashedPassword });
        res.status(201).json({ message: "User created successfully" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ email }, process.env.TOKEN_SECRET, {
          expiresIn: "1h",
        });
        console.log("login", token);
        console.log('user.id:', user._id);
        return res.status(200).json({ message: "Login successful", token });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
async showFavorites(req, res) {
  res.send('Favorites');
}

async showShoppingCart(req, res) {
  res.send('Shopping Cart');
}


}


module.exports = new UserController();
