const express = require("express");
const { createProduct } = require("../controller/Product");

const router = express.Router();

//  /products is already added in a base path
router.post("/", createProduct);

exports.router = router;