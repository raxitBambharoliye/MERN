import { Router } from "express";
import { UploadImage, UserAddContact, UserLogin, UserRegister } from "../controller/userController/user.controller";
import { reqAddContactValidation, reqLoginValidation, reqRegisterValidation } from "../validation/reqValidation";
import { upLoadImage } from "../middleware/multer";

const router = Router();

router.post('/register', reqRegisterValidation ,UserRegister);
router.post('/login', reqLoginValidation, UserLogin);

router.post('/addContact', reqAddContactValidation, UserAddContact);
router.post("/uploadImage", upLoadImage,UploadImage);
export{ router as userRouter};