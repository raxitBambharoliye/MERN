import jwt from 'jsonwebtoken'
import MQ from './mongoCommand';
import { MODAL } from '../constant';
import { AdminIn } from '../interface/Admin.interefact';
const authToken=async (req:any,res:any,next:any)=>{
    let token = req.headers['x-auth-token'];
    if(!token){
        return res.status(401).json({
            success:false,
            error: 'No token provided'
        })
    }
    const secret= process.env.JWT_SECRET || ""
    const verify:any =  jwt.verify(token,secret);
    if(!verify){
        return res.status(401).json({
            success:false,
            error: 'Invalid token'
        })
    }
    const adminData= await MQ.findById<AdminIn>(MODAL.ADMIN_MODAL,verify._id);
    if(!adminData || adminData.id != verify._id){
        return res.status(401).json({
            success:false,
            error: 'Invalid token'
        })
    }
   return next();
}

export default authToken;