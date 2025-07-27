const express = require("express");
const Achievement = require("../models/achievements");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { unlocked, limit = 8 } = req.query;

    const query = {};

    if (unlocked) query.unlocked = true;

    const achievements = await Achievement.find(query)
      .sort({ createdAt: 1 })
      .limit(limit);

    const total = await Achievement.countDocuments(query);

    res.status(200).json({ ok: true, data: achievements, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch achievements" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { icon, title, description, unlocked } = req.body;
    if (!icon || !title || !description)
      return res.status(400).json({
        ok: false,
        error: "icon, title and description are required",
      });

    const achievement = await Achievement.create({
      icon,
      title,
      description,
      unlocked,
    });
    res.status(201).json({ ok: true, data: achievement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to create achievement" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ ok: false, error: "Achievement ID is required" });

    const achievement = await Achievement.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ ok: true, data: achievement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to update achievement" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ ok: false, error: "Achievement ID is required" });

    await Achievement.findByIdAndDelete(id);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to delete achievement" });
  }
});

module.exports = router;
