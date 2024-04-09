import { Router } from "express";
import { userRouter } from "./user.router";
import { reqAddAdminVAlidation, reqLoginValidation } from "../validation/reqValidation";
import { AdminAdd, AdminLogin } from "../controller/adminController/admin.controller";

const router = Router();


router.get('/', (req, res) => {
    res.send('Hello World!');
})
router.post("/login", reqLoginValidation, AdminLogin)
router.post('/addAdmin',reqAddAdminVAlidation,AdminAdd)
router.use('/user',userRouter)
export default router;