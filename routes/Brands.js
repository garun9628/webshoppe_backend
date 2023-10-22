const express = require("express");
const { fetchBrands, createBrand } = require("../controller/Brand");

const router = express.Router();

//  /brands is already added in a base path
router.get("/", fetchBrands).post('/', createBrand);

exports.router = router;