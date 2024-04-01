import { UserModal } from "../model/user.modal";

class MongoQ {
  constructor() {}
  async findOne<T>(modal: string, query: any): Promise<T | null> {
    try {
      let data: any = await UserModal.findOne(query);
      return data;
    } catch (error: any) {
      return null;
    }
  }
}
