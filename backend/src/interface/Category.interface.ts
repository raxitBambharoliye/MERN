import { Mongoose, ObjectId } from "mongoose";

export default interface CategoryIn{
    categoryImage: string;
    categoryName:string;
    creator:ObjectId;
}