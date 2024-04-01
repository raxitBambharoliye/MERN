import { Router } from "express";
import { UserAddContact, UserLogin, UserRegister } from "../controller/userController/user.controller";
import { reqAddContactValidation, reqLoginValidation, reqRegisterValidation } from "../validation/reqValidation";

const router = Router();

router.post('/register', reqRegisterValidation ,UserRegister);
router.post('/login', reqLoginValidation, UserLogin);

router.post('/addContact', reqAddContactValidation,UserAddContact);
export{ router as userRouter};