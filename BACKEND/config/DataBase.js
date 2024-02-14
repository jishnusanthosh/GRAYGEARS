import mongoose from 'mongoose'
import colors from 'colors'
const connectDB=async()=>{
    try {
        
        const connect=await mongoose.connect(process.env.MONGO_URL)
      console.log(`Connected to MongoDb DataBase ${connect.connection.host}`.magenta);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.red);
    }
}

export default connectDB;