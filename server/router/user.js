const express = require("express");
const userRouter = express.Router();
const UserController = require("../controller/user.controller");
const authToken = require("../middleware/auth");

userRouter.route("/register").post(UserController.registerUser);

userRouter.route("/login").post(UserController.loginUser);

userRouter.route('/shopping-cart').post(authToken, UserController.updateShoppingCart);

userRouter.route('/favorites/add').post(authToken, UserController.saveFavorites);

userRouter.route('/favorites/delete').put(authToken, UserController.removeFromFavorites);

userRouter.route('/favorites/:userId').get(authToken, UserController.getFavoritesByUserId);



module.exports = userRouter;
