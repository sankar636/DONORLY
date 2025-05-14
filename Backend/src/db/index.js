import mongoose from 'mongoose'

const DB_NAME = 'DONORLY'

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
        console.log("MongoDB connected at: ",`${process.env.MONGODB_URI}${DB_NAME}`);
        
    } catch (error) {
        console.log("MongoDB connection Error",error);
        process.exit(1)
    }
}

export default connectToDatabase