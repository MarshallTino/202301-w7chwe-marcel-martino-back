import { type NextFunction, type Request, type Response } from "express";
import { User } from "../../../database/models/userSchema";
import CustomError from "../../customError/CustomError";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find();
  res.status(200).json({ users });

  if (!users) {
    const error = new CustomError("No users found", 404, "no users found");
    next(error);
  }
};
