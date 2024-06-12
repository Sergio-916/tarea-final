const mongoose = require("mongoose");

const shoppingCardSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    quantity: {
        type: Number,
        default: 1    
    }
});


module.exports = mongoose.model("ShoppingCard", shoppingCardSchema)