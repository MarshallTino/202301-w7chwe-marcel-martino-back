import mongoose from "mongoose";
import debug from "debug";

const createDebug = debug("users:database");
mongoose.set("strictQuery", false);

export const startDatabase = async (url: string) => {
  await mongoose.connect(url);
  createDebug("Database conected");
};
