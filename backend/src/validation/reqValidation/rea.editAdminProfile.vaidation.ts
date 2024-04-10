import { body, validationResult } from "express-validator";
import { MQ } from "../../common";
import { MODAL } from "../../constant";
import { AdminIn } from "../../interface/Admin.interefact";

const reqEditAdminProfileValidation = [
    body("adminId")
        .notEmpty().withMessage("adminId is required"),
    body("userName")
        .notEmpty().withMessage("user name is required")
        .custom(async(value,{req}) => {
            const data = await MQ.findOne<AdminIn>(MODAL.ADMIN_MODAL, { userName: value });
            console.log('req.body:: RRR ', req.body)
            if (data && data.id != req.body.adminId) {
                throw new Error("user name is already in use")
            }
        }),
    body("email")
        .notEmpty().withMessage("email is required")
        .isEmail().withMessage("enter valid email")
        .custom(async(value,{req}) => {
            const data = await MQ.findOne<AdminIn>(MODAL.ADMIN_MODAL, { email: value });
            if (data && data.id != req.body.adminId) {
                throw new Error("email is already in use")
            }
        }),
    body("companyName")
        .notEmpty().withMessage("companyName is required"),
    body("phone")
        .notEmpty().withMessage("phone is required"),
    body("role")
        .notEmpty().withMessage("role is required"),
    (req: any, res: any, next: any) => {
        const error = validationResult(req);
        console.log(req.file)
        if (!error.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: error.array()
            });
        }
       return next();
    }
]
export default reqEditAdminProfileValidation;