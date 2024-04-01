import mongoose from "mongoose"

export const mongoConnection =async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/MERN');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });
}
