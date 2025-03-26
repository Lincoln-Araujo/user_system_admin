const mongoose = require('mongoose');

const connectDB = async () => {
  if (process.env.NODE_ENV === 'test') {
    console.log('Skipping MongoDB connection in test environment.');
    return;
  }

  if (!mongoose.connection.readyState) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB Connected');
    } catch (err) {
      console.error('Could not connect to MongoDB:', err.message);
      throw new Error('Database connection failed');
    }
  }
};

const disconnectDB = async () => {
  await mongoose.disconnect();
};

module.exports = { connectDB, disconnectDB };
