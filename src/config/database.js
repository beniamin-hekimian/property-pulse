import mongoose from "mongoose";

let connected = false;

export default async function connectDB() {
  // ensure that only the fields that are specified in our schema will we saved in our database
  mongoose.set('strictQuery', true);

  // if the database is already connected, don't connect again
  if(connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  // connect to MongoDB
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
}