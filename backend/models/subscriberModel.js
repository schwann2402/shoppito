import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const subscriberModel =
  mongoose.models.subscriber || mongoose.model("subscriber", subscriberSchema);

export default subscriberModel;
