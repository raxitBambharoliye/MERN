import multer from "multer";
import path from 'path'
const imgObj = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..' +process.env.PROFILE_PATH));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});


export const upLoadImage = multer({ storage: imgObj });
