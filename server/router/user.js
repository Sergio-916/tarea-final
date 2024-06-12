const express = require("express");
const userRouter = express.Router();
const UserController = require("../controller/user.controller");
const authToken = require("../middleware/auth");

userRouter.route("/register").post(UserController.registerUser);
userRouter.route("/login").post(UserController.loginUser);
userRouter.route('/favorites').get(authToken, UserController.showFavorites);

userRouter.route('/shopping-cart').get(authToken, UserController.showShoppingCart);

userRouter.get("/profile", authToken, (req, res) => {
    res.status(200).json({ message: 'Protected route accessed' });
  });

module.exports = userRouter;
