import app from "./app";
import Database from "./data/database";

const port = 3000;

// Connect to MongoDB
Database.connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
