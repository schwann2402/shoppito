import express from "express";
import { addSubscriber } from "../controllers/subscriberController.js";

const subscriberRouter = express.Router();

subscriberRouter.post("/new", addSubscriber);

export default subscriberRouter;
