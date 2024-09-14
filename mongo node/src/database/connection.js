import mongoose from "mongoose";
import dotenv from "dotenv";


const NameDb = { dbName: 'Aula'} //nome do db a conectar
dotenv.config();
const url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@users.9ztxs.mongodb.net/?retryWrites=true&w=majority&appName=Users`

async function connectDb() {
  await mongoose.connect(
   url, NameDb );
}

export default connectDb;
