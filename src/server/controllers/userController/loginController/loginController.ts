import "../../../../loadEnv.js";
import jwt from "jsonwebtoken";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../customError/CustomError.js";
import { User } from "../../../../database/models/userSchema.js";
export const login = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    { user: string; password: string }
  >,
  res: Response,
  next: NextFunction
) => {
  const { user, password } = req.body;

  const userName = await User.findOne({ user, password });

  if (!userName) {
    const customError = new CustomError(
      "There is no User",
      401,
      "You didn't provie a user name"
    );
    next(customError);
    return;
  }

  const jwtPayload = {
    sub: userName?._id,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!);

  res.status(200).json({ token });
};

export default login;
