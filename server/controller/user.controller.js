const User = require("../models/user.model");
const ShoppingCard = require("../models/shopping-card.model");
const Favorite = require("../models/favorites.model")
const Product = require("../models/product.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserController {
  async registerUser(req, res) {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(409)
          .json({ message: "User with this email already exists" });
      } else {
        await User.insertMany({ username, email, password: hashedPassword });
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
        console.log("login", token, user._id, user.username);
        return res
          .status(200)
          .json({ message: "Login successful", token, user });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async updateShoppingCart(req, res) {
    try {
      const cartData = req.body;
      const user = cartData.user._id;

      const products = cartData.cart.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      }));

      // Write the new cart to the database
      const newCart = await ShoppingCard.insertMany([
        {
          user: user,
          products: products,
        },
      ]);

      // Update stock for each product in the cart
      const updateStock = cartData.cart.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
      }));
      console.log("updateStock", updateStock);
      try {
        for (const item of updateStock) {
          const product = await Product.findOne({ name: item.name });
          if (product) {
            await Product.updateOne(
              { name: item.name },
              { stock: product.stock - item.quantity }
            );
            console.log(`Stock updated for ${item.name}`);
          } else {
            console.log(`Product not found: ${item.name}`);
          }
        }
      } catch (error) {
        console.log(error);
      }    
      res.send(newCart);
   
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.log(error);
    }
  }

async saveFavorites(req, res) {
  try {
const data = req.body;
const user = data.user._id;
const product = data.product._id;

const existingUser = await Favorite.findOne({ user: user });
if (!existingUser) {
  await Favorite.insertMany([
   {
     user: user,
     product: product
   }
 ]);
 console.log("Favorite added successfully");
} else {
  await Favorite.updateOne({ user: user }, { $push: { products: product } });
  console.log("Favorite updated successfully");
}
console.log("Product", product);
res.send(product);
  } catch(error) {
    console.log(error);
  }
}

async removeFromFavorites(req, res) {
  try {
    const data = req.body;
    const user = data.user._id;
    const product = data.product._id;


await Favorite.updateOne(
  { user: user },
      { $pull: { products: product } }
)
console.log("Favorite deleted successfully", product);

res.send(product);
  } catch (error) {
    console.log(error);
  }
}
async getFavoritesByUserId (req, res) {
  try {
    const { userId } = req.params;
    const favorite = await Favorite.findOne({ user: userId }).populate('products');

    if (!favorite) {
      return res.status(404).json({ message: 'Favorites not found' });
    }

    res.status(200).json(favorite.products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};




}

module.exports = new UserController();
