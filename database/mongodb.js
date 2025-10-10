import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "DB_URI is not defined,please define it inside the .env.<development/production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to the database successfully in ${NODE_ENV} mode.`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
