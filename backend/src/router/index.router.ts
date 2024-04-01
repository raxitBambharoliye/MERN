import { Router } from "express";
import { userRouter } from "./user.router";

const router = Router();


router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.use('/user',userRouter)
export default router;