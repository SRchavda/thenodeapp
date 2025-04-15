import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_CONN_URL || "mongodb://localhost:27017/oms";

class Database {
  async connect() {
    try {
      await mongoose.connect(mongoUrl); // Replace with your connection string
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
}

export default new Database();
