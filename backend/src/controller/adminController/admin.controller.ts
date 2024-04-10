import bcrypt from "bcrypt";
import logger from "../../utility/log";
import { MQ } from "../../common";
import { MODAL } from "../../constant";
import { AdminIn } from "../../interface/Admin.interefact";
import { generateToken } from "../../common/generateToken";
import fs from 'fs';
import path from 'path'
const AdminLogin =async (req: any, res: any) => {
  try {
    console.log("req", req.body);
    const { email, password } = req.body;
    const admin =await MQ.findOne<AdminIn>(MODAL.ADMIN_MODAL, { email });
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

const AdminEditProfile = async (req: any, res: any) => {
  try {
    console.log('req', req.body)
    if (!req.body.adminId) {
      return res.status(400).json({
        error:[{path:'root',msg:"invalid data "}]
      })
    }
    const admin = await MQ.findById<AdminIn>(MODAL.ADMIN_MODAL, req.body.adminId);
    console.log('admin', admin)
    if (!admin) {
      return res.status(401).json({
        error:[{path:'root',msg:"unauthenticated user "}]
      })
    }
    console.log('req.file', req.file)
    if (typeof req.file != 'undefined') {
      if (admin.profile) {
        fs.unlinkSync(path.join(__dirname,'../..',admin.profile))
      }
      req.body.profile = process.env.PROFILE_PATH + '/' + req.file.filename;
    }
    const upAdmin = await MQ.findByIdAndUpdate(MODAL.ADMIN_MODAL, admin.id, req.body, true);
    if (upAdmin) {
      const token=await generateToken(admin.id,admin.email)
      return res.status(200).json({admin:upAdmin,token});
    } else {
      return res.status(1001).json({message:'something was wrong try after some time '})
    }
  } catch (error) {
    logger.error(`CATCH ERROR : IN : admin : AdminEditProfile : 🐞🐞🐞 : \n ${error}`);
  }
}

export { AdminLogin, AdminAdd ,AdminEditProfile};
