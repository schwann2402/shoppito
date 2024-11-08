import express from "express";
import {
  bestSellersFetch,
  latestProducts,
  listProducts,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/list", listProducts);
productRouter.get("/bestsellers", bestSellersFetch);
productRouter.get("/latest", latestProducts);

export default productRouter;
