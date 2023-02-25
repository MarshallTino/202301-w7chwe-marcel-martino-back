import { Router } from "express";
import { getUsers } from "../controllers/usersController/usersController.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);

export default usersRouter;
