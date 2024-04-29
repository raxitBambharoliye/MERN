import { Router } from "express";
import { frontAllCategory } from "../controller/froentController/front.data.controller";

const router = Router();


router.get('/userAllCategory',frontAllCategory)





export {router as frontRouter}