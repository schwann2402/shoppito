import productModel from "../models/productModel.js";

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const bestSellersFetch = async (req, res) => {
  const bestSellers = await productModel.find({ bestseller: true });
  res.json({ success: false, bestSellers });
};

const latestProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products: products.slice(0, 10) });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { listProducts, bestSellersFetch, latestProducts };
