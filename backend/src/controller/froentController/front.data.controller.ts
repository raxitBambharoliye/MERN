import { MQ } from "../../common";
import { MODAL } from "../../constant";
import logger from "../../utility/log"

const frontAllCategory= async (req:any,res:any)=>{
    try {
        let data= await MQ.find(MODAL.CATEGORY_MODAL,{isActive:true});
        console.log('data', data)
        if(data){
            res.status(200).json({allCategory:data});
        }
    } catch (error) {
        logger.error(
            `CATCH ERROR : IN : category : getAllCategoryData : 🐞🐞🐞 : \n ${error}`
          );
    }
}




export{frontAllCategory}