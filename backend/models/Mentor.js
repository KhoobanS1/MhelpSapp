const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profession: { type: String, required: true },
  image: String,
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
