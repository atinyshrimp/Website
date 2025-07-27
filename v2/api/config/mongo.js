const mongoose = require("mongoose");
const CONFIG = require(".");

async function connectDB() {
  try {
    await mongoose.connect(CONFIG.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectDB;
