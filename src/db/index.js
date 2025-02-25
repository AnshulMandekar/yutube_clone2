import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv"; 
dotenv.config({
  path : './.env'
});

const connectDB = async () => {
  try{
    const connnection_instant = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`the data is connect to ${connnection_instant.connection.host}`);

  } catch(error){
    console.log("Not connected",error);
    process.exit(1);
  }
};

export default connectDB;