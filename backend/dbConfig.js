const mongoose = require("mongoose");

async function initialize() {
  try {
    await mongoose.connect(
      "mongodb+srv://KaidoSan:Bareerah2001@cluster0.vk6ohm7.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = initialize;
