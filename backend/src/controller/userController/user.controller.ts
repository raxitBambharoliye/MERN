import { UserModal } from "../../model/user.modal";
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'   
import ContactModal from "../../model/constact.model";
const UserRegister =async (req:any,res:any) => {
    try {
        console.log(req.body);

        const data =await UserModal.create(req.body);
        res.send(data)
    } catch (error) {
        console.log('CATCH ERROR : IN : user : register : ', error);
    }
}

const UserLogin = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        const user = await UserModal.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message:[{path: "root",msg:"Invalid password or email "}] });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            // {type: 'field', msg: 'test is required', path: 'test', location: 'body'}
            return res.status(400).json({ message:[{path: "root",msg:"Invalid password or email "}] });
        }
        const secret = process.env.JWT_SECRET || "";
        const token = jwt.sign({ _id: user._id, email: user.email },secret, {
            expiresIn: 86400
        });
        res.status(200).json({
            token,
            user
        });
    } catch (error) {
        console.log('CATCH ERROR : IN : user : UserLogin : ', error);
    }
}

const UserAddContact = async (req: any, res: any) => {
    try {
        const addData = await ContactModal.create(req.body);
        if (addData) {
            res.status(200).json({message:"contact added successfully", contact:addData})
        } else {
            res.status(500).json({message:"contact not added"})
        }
    } catch (error) {
        console.log('CATCH ERROR : IN : user : UserAddContact : ', error);
    }
}

export {
    UserRegister,
    UserLogin,
    UserAddContact,
};