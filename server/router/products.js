const router = require("express").Router();
const ProductController = require("../controller/product.controller");


router.route("/").get(ProductController.showAllProducts);

router.route('/bread').get(ProductController.showBread);
router.route('/bakery').get(ProductController.showBakery);
router.route('/cakes').get(ProductController.showCakes);






module.exports = router;