import mongoose from "mongoose";
import { MODAL } from "../constant";


const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        require:true,
    },
    categoryImage:{
        type:String,
        require:true,
    }
},{timestamps:true})

const CategoryModal = mongoose.model(MODAL.CATEGORY_MODAL,categorySchema);


export default CategoryModal;