import bcrypt from "bcrypt";
import logger from "../../utility/log";
import { MQ } from "../../common";
import { MODAL } from "../../constant";
import { AdminIn } from "../../interface/Admin.interefact";
import { generateToken } from "../../common/generateToken";

const AdminLogin =async (req: any, res: any) => {
  try {
    console.log("req", req.body);
    const { email, password } = req.body;
    const admin =await MQ.findOne<AdminIn>(MODAL.ADMIN_MODAL, { email: email });
    if (!admin) {
      return res.status(400).json({
        error: [{ path: "root", msg: "Invalid password or email " }],
      });
    }
    let passwordCheck = await bcrypt.compare(password, admin.password);
    if (!passwordCheck) {
      return res.status(400).json({
        error: [{ path: "root", msg: "Invalid password or email " }],
      });
    }
    let token =await generateToken(admin._id, admin.email);
    res.status(200).json({token:token,admin});
  } catch (error) {
    logger.error(`CATCH ERROR : IN : admin : AdminLogin : 🐞🐞🐞 : \n `, error);
  }
};

const AdminAdd = async (req: any, res: any) => {
  try {
    req.body.role = "admin";
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.isActive = false;
    let adminData = await MQ.addData<AdminIn>(MODAL.ADMIN_MODAL, req.body);
    if (adminData) {
      res
        .status(200)
        .json({ message: "admin added successfully ", admin: adminData });
    }
  } catch (error) {
    logger.error(`CATCH ERROR : IN : admin : AdminAdd : 🐞🐞🐞 : \n `, error);
  }
};

export { AdminLogin, AdminAdd };
