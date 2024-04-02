import mongoose from "mongoose"
import logger from "../utility/log";

export const mongoConnection =async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/MERN');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        logger.info('Connected to MongoDB 💓💓💓 ');
    });
}
