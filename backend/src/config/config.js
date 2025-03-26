module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/user-management',
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
};