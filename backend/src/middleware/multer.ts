import multer from "multer";
import path from 'path'
const imgObj = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../upload'));
    },
    filename: (req, file, cb) => {
        console.log('file RRRR :: ', file)
        cb(null, file.fieldname + '-' + Date.now());
    }
});


export const upLoadImage = multer({ storage: imgObj }).single('image');
