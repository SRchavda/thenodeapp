import mongoose from 'mongoose';

class Database {
  async connect() {
    try {
      await mongoose.connect('mongodb+srv://shivrajchavda1008:whyRCB18@cluster0.e1dtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'); // Replace with your connection string
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
}

export default new Database();