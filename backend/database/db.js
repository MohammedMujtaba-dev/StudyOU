import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
