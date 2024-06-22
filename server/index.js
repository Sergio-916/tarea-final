const express = require("express");
const cors = require("cors");
const router = require("./router/products");
const userRouter = require("./router/user");
const connectDB = require("./db/connect");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3050;

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      maxAge: 3600,
    })
  );


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


