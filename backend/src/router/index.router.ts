import { Router } from "express";
import { userRouter } from "./user.router";
import { reqAddAdminVAlidation, reqLoginValidation } from "../validation/reqValidation";
import { AdminActive, AdminAdd, AdminAllAdminData, AdminDelete, AdminEditProfile, AdminLogin } from "../controller/adminController/admin.controller";
import { upLoadImage } from "../middleware/multer";
import reqEditAdminProfileValidation from "../validation/reqValidation/rea.editAdminProfile.vaidation";
import authToken from "../common/authToken";

const router = Router();


router.get('/', (req, res) => {
    res.send('Hello World!');
})
router.post("/login", reqLoginValidation, AdminLogin)

router.post('/addAdmin', authToken,upLoadImage.single("profile"),reqAddAdminVAlidation, AdminAdd)
router.post('/editAdminProfile',authToken,upLoadImage.single("profile"),reqEditAdminProfileValidation,AdminEditProfile)

router.get('/allAdmin', authToken, AdminAllAdminData);


router.delete('/deleteAdmin/:id',authToken,AdminDelete)
router.get('/activeAdmin/:id',authToken,AdminActive)

router.use('/user', userRouter);
export default router;