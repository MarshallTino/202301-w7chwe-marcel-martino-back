import cors from "cors";
import express from "express";
import morgan from "morgan";
import { notFoundError, generalError } from "./middlewares/errorMiddlewares.js";
import userRouter from "./routers/userRouter.js";
import usersRouter from "./routers/usersRouter.js";

const app = express();

app.use(cors());
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.use("/user", userRouter);
app.use("/users", usersRouter);

app.use(notFoundError);
app.use(generalError);
export default app;
