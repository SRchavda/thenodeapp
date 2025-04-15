import app from "./app";
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_CONN_URL || "mongodb://localhost:27017/oms";
const port = 3000;

// MongoDB connection URL (replace with your actual connection string)
const dbUrl = mongoUrl;

// Connect to MongoDB
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
