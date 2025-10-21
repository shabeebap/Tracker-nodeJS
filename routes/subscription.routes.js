import { Router } from "express";
import authorizeMiddleware from "../middlewares/auth.middleware.js";
import {
  createSubscripotion,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscriptions" });
});
subscriptionRouter.get("/:id", authorizeMiddleware);
subscriptionRouter.post("/", authorizeMiddleware, createSubscripotion);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update subscription details" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete subscription" })
);
subscriptionRouter.get("/user/:id", authorizeMiddleware, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "Cancel subscription" })
);
subscriptionRouter.get("/upcoming-renewal", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subscriptionRouter;
