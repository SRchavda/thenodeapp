import app from './app';
import mongoose from 'mongoose';

const port = 3000;

// MongoDB connection URL (replace with your actual connection string)
const dbUrl = 'mongodb+srv://shivrajchavda1008:whyRCB18@cluster0.e1dtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(dbUrl)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
