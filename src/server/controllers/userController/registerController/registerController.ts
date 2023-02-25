import { type Request, type NextFunction, type Response } from "express";
import bcryptjs from "bcryptjs";
import CustomError from "../../../../customError/CustomError.js";
import type UserStructure from "./types.js";
import { User } from "../../../../database/models/userSchema.js";

const register = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userImage = req.file?.filename;

    const { password, username, email } = req.body;

    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      userImage,
      email,
    });

    res.status(201).json({ user });
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      401,
      "The entered credentials are invalid"
    );
    next(customError);
  }
};

export default register;
