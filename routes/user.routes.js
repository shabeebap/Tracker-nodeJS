import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";
import authorizeMiddleware from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", authorizeMiddleware, getUser);
userRouter.post("/", (req, res) => res.send({ title: "Create new  users" }));
userRouter.put("/:id", (req, res) =>
  res.send({ title: "Update user details" })
);
userRouter.delete("/:id", (req, res) => res.send({ title: "Delete users " }));

export default userRouter;
