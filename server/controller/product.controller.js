const Product = require("../models/product.model");

class ProductController {

  async showAllProducts(req, res) {
    const products = await Product.find();
    return res.json(products);
  }

async showBread(req, res) {
    const products = await Product.find({ category: "Bread" });
    return res.json(products);
}

async showCakes(req, res) {
    const products = await Product.find({ category: "Cakes" });
    return res.json(products);
}

async showBakery(req, res) {
    const products = await Product.find({ category: "Bakery" });
    return res.json(products);
}
}

module.exports = new ProductController();
