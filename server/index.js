const express = require("express");
const cors = require("cors");
const router = require("./router/products");
const userRouter = require("./router/user");
const connectDB = require("./db/connect");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3050;



app.use(express.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://vercel.com/sergio-916s-projects/ecommerce-bakery");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

// app.use(
//   cors({
//     origin:
//         // "http://localhost:5173", 
//        "https://vercel.com/sergio-916s-projects/ecommerce-bakery",
//       // "https://ecommerce-bakery-47dv7jd9a-sergio-916s-projects.vercel.app/",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     maxAge: 3600,
//   })
// );

app.use(
  cors()
)


app.use(express.urlencoded({ extended: true }));

app.use("/product", router);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
