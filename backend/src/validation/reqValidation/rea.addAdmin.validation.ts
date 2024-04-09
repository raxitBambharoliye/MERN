import { body, validationResult } from "express-validator";
import { MQ } from "../../common";
import { MODAL } from "../../constant";

const reqAddAdminVAlidation = [
    body("userName").notEmpty().withMessage("user Name is required")
        .custom(async (value) => {
            const adminData:any = await MQ.findOne(MODAL.ADMIN_MODAL, { userName: value });
            if (adminData ) {
                throw new Error("user name is already taken");
            }
        }
    ),
    body("email").notEmpty().withMessage("email is required")
    .custom(async (value) => {
        const adminData:any = await MQ.findOne(MODAL.ADMIN_MODAL, { email: value });
        if (adminData ) {
            throw new Error("email Id  is already taken");
        }
    }
),
    body('password')
        .notEmpty().withMessage("password is required")
        .isLength({ min: 6 }).withMessage("password must be at least 6 characters"),
    (req: any, res: any, next: any) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                success: false,
                message:error.array()
            })
        }
        return next();
    }

];
export default reqAddAdminVAlidation;
