import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connect to data base ${conn.connection.host}`)
    } catch (error) {
        console.log(`error on mongoDB ${error}`)
        
    }
}

export default connectDB;