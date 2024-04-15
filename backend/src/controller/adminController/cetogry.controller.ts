import { MQ } from "../../common"
import { MODAL } from "../../constant"
import CategoryIn from "../../interface/Category.interface";
import logger from "../../utility/log"

const addCategory= async (req:any, res:any)=>{
    try {
        if(req.file){

             req.body.categoryImage= process.env.CATEGORY_IMAGE_PATH + '/' + req.file.filename;
        }else{
            res.status(400).json({message:'category image is required',path:'categoryImage'})
        }
        
        const categoryData= await MQ.addData(MODAL.CATEGORY_MODAL,req.body);
        if(categoryData){
            const allCategory=await MQ.find<CategoryIn>(MODAL.CATEGORY_MODAL,{});
            res.status(200).json({message:'category added successfully ', allCategory})
        }
    } catch (error) {
        logger.error(`CATCH ERROR : IN : category : addCategory : 🐞🐞🐞 : \n ${error}`)
    }
}




export { addCategory }