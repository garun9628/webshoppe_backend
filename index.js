const express = require("express");
const server = express();
const mongoose = require("mongoose");
const productsRouters = require("./routes/Products");
const categoriesRouters = require("./routes/Categories");
const brandsRouters = require("./routes/Brands");
const cors = require("cors");

// middlewares
server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use(express.json());
server.use("/products", productsRouters.router);
server.use("/categories", categoriesRouters.router);
server.use("/brands", brandsRouters.router);
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/webShoppe");
  console.log("mongodb connection success");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});
server;

server.listen(8080, () => {
  console.log("server started at port 8080");
});
