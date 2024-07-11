const express = require("express");
const cors = require("cors");
const router = require("./router/products");
const userRouter = require("./router/user");
const connectDB = require("./db/connect");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3050;



app.use(express.json());


// app.use(cors({
//   origin: "https://ecommerce-bakery.vercel.app/",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"],
//   credentials: true,
//   maxAge: 3600,
// }));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://ecommerce-bakery.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(express.urlencoded({ extended: true }));

app.use("/product", router);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


 
//final for today


const appstart = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

appstart();

module.exports = app;
