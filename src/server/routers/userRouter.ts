import { Router } from "express";
import multer from "multer";
import login from "../controllers/userController/loginController/loginController.js";
import register from "../controllers/userController/registerController/registerController.js";

const userRouter = Router();

const storage = multer.diskStorage({
  destination: "userImages/",
  filename(req, file, callback) {
    const separatedNameExtension = file.mimetype.split("/");
    const extension = separatedNameExtension[separatedNameExtension.length - 1];
    const uniqueSuffix = Date.now();
    callback(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({ storage });

userRouter.post("/login", login);
userRouter.post("/register", upload.single("userImage"), register);
export default userRouter;
