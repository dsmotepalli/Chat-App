const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "chat-app",
  });

  console.log(`MognoDB connected ${conn.connection.host}`);
};

module.exports = connectDB