const express = require("express");
const Interest = require("../models/interests");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { isFeatured, limit = 10 } = req.query;

    const query = {};

    if (isFeatured) query.isFeatured = true;

    const interests = await Interest.find(query).limit(limit);
    const total = await Interest.countDocuments(query);

    res.status(200).json({ ok: true, data: interests, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch interests" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description, imageUrl, highlight, isFeatured } = req.body;
    if (!title || !description || !imageUrl || !highlight) {
      return res.status(400).json({
        ok: false,
        error: "title, description, imageUrl and highlight are required",
      });
    }

    const interest = await Interest.create({
      title,
      description,
      imageUrl,
      highlight,
      isFeatured,
    });
    res.status(201).json({ ok: true, data: interest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to create interest" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        ok: false,
        error: "Interest ID is required",
      });
    }

    const interest = await Interest.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ ok: true, data: interest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to update interest" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        ok: false,
        error: "Interest ID is required",
      });
    }

    await Interest.findByIdAndDelete(id);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to delete interest" });
  }
});
module.exports = router;
