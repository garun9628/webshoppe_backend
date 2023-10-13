const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {
  // this product we have to get from API body

  const product = new Product(req.body);
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.fetchAllProducts = async (req, res) => {

  const products = Product.find({});
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
