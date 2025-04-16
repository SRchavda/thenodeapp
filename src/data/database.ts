import mongoose from "mongoose";

const mongoUrl: string =
  "mongodb+srv://shivrajchavda1008:whyRCB18@cluster0.e1dtm.mongodb.net/OMS-P?retryWrites=true&w=majority";

class Database {
  async connect() {
    try {
      await mongoose.connect(mongoUrl, {
        // Add connection options
        serverSelectionTimeoutMS: 5000, // Timeout after 5s
        connectTimeoutMS: 10000, // Timeout after 10s
      });
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  }
}

export default new Database();
