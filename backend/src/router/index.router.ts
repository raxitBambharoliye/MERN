import { Router } from "express";
import { userRouter } from "./user.router";
import { reqAddAdminVAlidation, reqLoginValidation } from "../validation/reqValidation";
import { AdminAdd, AdminEditProfile, AdminLogin } from "../controller/adminController/admin.controller";
import { upLoadImage } from "../middleware/multer";
import reqEditAdminProfileValidation from "../validation/reqValidation/rea.editAdminProfile.vaidation";

const router = Router();


router.get('/', (req, res) => {
    res.send('Hello World!');
})
router.post("/login", reqLoginValidation, AdminLogin)

router.post('/addAdmin', upLoadImage.single("profile"),reqAddAdminVAlidation, AdminAdd)
router.post('/editAdminProfile',upLoadImage.single("profile"),reqEditAdminProfileValidation,AdminEditProfile)
router.use('/user', userRouter);

export default router;