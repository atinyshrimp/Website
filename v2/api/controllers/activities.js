const express = require("express");
const Activity = require("../models/activities");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { description, limit = 15 } = req.query;
    const query = {};

    if (description) query.description = new RegExp(description, "i");

    const activities = await Activity.find(query)
      .sort({ happenedAt: -1 })
      .limit(limit);

    const total = await Activity.countDocuments(query);

    res.status(200).json({ ok: true, data: activities, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch activities" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { description, happenedAt } = req.body;
    if (!description || !happenedAt)
      return res.status(400).json({
        ok: false,
        error: "description and happenedAt are required",
      });

    const activity = await Activity.create({ description, happenedAt });
    res.status(201).json({ ok: true, data: activity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to create activity" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ ok: false, error: "Activity ID is required" });

    const { description, happenedAt } = req.body;
    const activity = await Activity.findByIdAndUpdate(
      id,
      { description, happenedAt },
      { new: true }
    );
    res.status(200).json({ ok: true, data: activity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to update activity" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ ok: false, error: "Activity ID is required" });

    await Activity.findByIdAndDelete(id);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to delete activity" });
  }
});

module.exports = router;
