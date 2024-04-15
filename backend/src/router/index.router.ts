import { Router } from "express";
import { userRouter } from "./user.router";
import { reqAddAdminVAlidation, reqAddCategoryValidation, reqEditCategoryValidation, reqLoginValidation } from "../validation/reqValidation";
import { AdminActive, AdminAdd, AdminAllAdminData, AdminDelete, AdminEditProfile, AdminLogin } from "../controller/adminController/admin.controller";
import { upLoadImage } from "../middleware/multer";
import reqEditAdminProfileValidation from "../validation/reqValidation/rea.editAdminProfile.vaidation";
import authToken from "../common/authToken";
import { activeCategory, addCategory, allCategory, deleteCategory, editCategory } from "../controller/adminController/cetogry.controller";

const router = Router();


router.get('/', (req, res) => {
    res.send('Hello World!');
})
router.post("/login", reqLoginValidation, AdminLogin)

router.post('/addAdmin', authToken,upLoadImage.single("profile"),reqAddAdminVAlidation, AdminAdd)
router.post('/editAdminProfile',authToken,upLoadImage.single("profile"),reqEditAdminProfileValidation,AdminEditProfile)
router.get('/allAdmin/:page/:limit/', authToken, AdminAllAdminData);


router.delete('/deleteAdmin/:id/:page/:limit/',authToken,AdminDelete)
router.get('/activeAdmin/:id/:page/:limit/',authToken,AdminActive)


router.post('/addCategory',authToken, upLoadImage.single('categoryImage'),reqAddCategoryValidation, addCategory);
router.get('/allCategory/:page/:limit/',authToken,allCategory)
router.get('/activeCategory/:id/:page/:limit/',authToken,activeCategory)
router.delete('/deleteCategory/:id/:page/:limit/',authToken,deleteCategory)
router.post('/editCategory',authToken,upLoadImage.single('categoryImage'),reqEditCategoryValidation,editCategory)
router.use('/user', userRouter);
export default router;