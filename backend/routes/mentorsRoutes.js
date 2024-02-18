// routes/mentorsRoutes.js

const express = require("express");
const router = express.Router();
const Mentor = require("../models/Mentor");

// Route to fetch all mentors
router.get("/mentors", async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to create a new mentor
router.post("/mentors", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.json({ message: "Mentor profile created successfully", mentor });
  } catch (error) {
    console.error("Error creating mentor profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
