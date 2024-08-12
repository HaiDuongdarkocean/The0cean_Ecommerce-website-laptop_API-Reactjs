import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/userController";
import { UploadMultiService } from "../services/upload-multiService";

const userRouter = Router();

const userController = container.resolve(UserController);
const uploadMultiService = container.resolve(UploadMultiService);

userRouter.post('/create', uploadMultiService.multerMultiUpload, userController.createUser.bind(userController));
userRouter.post('/login', userController.getUserByAccountAndAuthenticate.bind(userController));
export default userRouter;