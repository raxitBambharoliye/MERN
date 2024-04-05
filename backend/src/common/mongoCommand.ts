import { MODAL } from "../constant";
import { UserIn } from "../interface/User.intereface";
import ContactModal from "../model/constact.model";
import { UserModal } from "../model/user.modal";
import logger from "../utility/log";

class MongoQ {
  private collection:any;
  selectModal(modal: string) {
    switch (modal) {
      case MODAL.USER_MODAL:
        this.collection = UserModal;
        break;
      case MODAL.CONTACT_MODAL:
        this.collection = ContactModal;
        break;
    }
  }
  async findOne<T>(modal: string, query: any): Promise<T | null> {
    try {
      this.selectModal(modal);
      let data: any = await this.collection.findOne(query);
      return data;
    } catch (error: any) {
      logger.error(`CATCH ERROR IN :: findOne :: 🤷‍♂️🤷‍♂️🤷‍♂️ :: \n :: ${error} `);
      return null;
    }
  }
  async findById<T>(modal: string, id: any): Promise<T | null> {
    try {
      this.selectModal(modal);
      let data: any = await this.collection.findById(id);
      return data;
    } catch (error) {
      logger.error(`CATCH ERROR IN :: findById :: 🤷‍♂️🤷‍♂️🤷‍♂️ :: \n :: ${error} `);
      return null;
    }
  }
  async findByIdAndUpdate<T>(modal: string, id: any, data: any,newReturn=false): Promise<T | null> {
    try {
      this.selectModal(modal);
      let upData: any = await this.collection.findByIdAndUpdate(id, data,{new:newReturn});
      return upData;
    } catch (error) {
      logger.error(`CATCH ERROR IN :: findByIdAndUpdate :: 🤷‍♂️🤷‍♂️🤷‍♂️ :: \n :: ${error}`);
      return null;

    }
  }
}
 
const MQ = new MongoQ();
export default MQ;
