import { UserModal } from "../../model/user.modal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ContactModal from "../../model/constact.model";
import { generateToken } from "../../common/generateToken";
import logger from "../../utility/log";
const UserRegister = async (req: any, res: any) => {
  try {

    const data = await UserModal.create(req.body);
    let token = await generateToken(data._id, data.email);
      res.status(200).json({ user: data, token });
  } catch (error) {
    logger.error(`CATCH ERROR : IN : user : register : 🐞🐞🐞 :\n ${error}`);
  }
};

const UserLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user = await UserModal.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({
          message: [{ path: "root", msg: "Invalid password or email " }],
        });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({
          message: [{ path: "root", msg: "Invalid password or email " }],
        });
    }
    let token = await generateToken(user._id, user.email);
    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    logger.error(`CATCH ERROR : IN : user : UserLogin : 🐞🐞🐞 : \n ${error} ` );
  }
};

const UserAddContact = async (req: any, res: any) => {
  try {
    const addData = await ContactModal.create(req.body);
    if (addData) {
      res
        .status(200)
        .json({ message: "contact added successfully", contact: addData });
    } else {
      res.status(500).json({ message: "contact not added" });
    }
  } catch (error) {
    logger.error(`CATCH ERROR : IN : user : UserAddContact : 🐞🐞🐞 : \n `, error);
  }
};

const UploadImage = async (req: any, res: any) => {
  console.log("test upload image")
  console.log(req.body);
}

export { UserRegister, UserLogin, UserAddContact,UploadImage };
