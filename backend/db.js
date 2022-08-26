import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB (){
    let res = await mongoose.connect(process.env.MONGODB_URI, console.log("DB connected"));
    return res;
}

let db = connectDB();

export default db;