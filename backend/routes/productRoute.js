import express from "express";
import {
  bestSellersFetch,
  listProducts,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/list", listProducts);
productRouter.get("/bestsellers", bestSellersFetch);

export default productRouter;
