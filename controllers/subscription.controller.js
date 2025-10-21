import Subscription from "../models/subscription.model.js";

export const createSubscripotion = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: subscription });
  } catch (err) {
    next(err);
  }
};
export const getUserSubscriptions = async (req, res, next) => {
  try {
    //check if the user is same as the one in the token
    if (req.user.id.toString() !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }
    const subscriptions = await Subscription.find({
      user: req.params.id,
    });
    res.status(200).json({ success: true, data: subscriptions });
  } catch (err) {
    next(err);
  }
};
