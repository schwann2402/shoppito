import subscriberModel from "../models/subscriberModel.js";

const addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscriber = await subscriberModel.create({
      email,
    });
    res.json({ success: true, newSubscriber });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addSubscriber };
