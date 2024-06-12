const connectDB = require("./db/connect");
const Product = require("./models/product.model");
const products = require("./public/products.json");


const start = async () => {
    try { await connectDB(process.env.MONGO_URL);
        await Product.deleteMany();
        await Product.create(products);
        console.log("success");
        process.exit(0);
    } catch (error) {
        console.log(error); process.exit(1);
    }    
};  
start();