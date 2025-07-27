const express = require("express");
const Card = require("../models/cards");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const query = {};

    if (req.query.isFeatured)
      query.isFeatured = req.query.isFeatured === "true";
    if (req.query.type) query.type = req.query.type;

    if (
      req.query.tags &&
      Array.isArray(req.query.tags) &&
      req.query.tags.length > 0
    )
      query.tags = { $in: req.query.tags };

    const cards = await Card.find(query)
      .sort({ title: 1 })
      .populate("skillDetails.relatedProjects");
    const total = await Card.countDocuments(query);

    res.status(200).json({ ok: true, data: cards, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch cards" });
  }
});

router.get("/featured", async (req, res) => {
  try {
    const { size = 3 } = req.query;
    const cards = await Card.aggregate([
      { $match: { isFeatured: true } },
      { $sample: { size: Number(size) } },
    ]);
    const total = await Card.countDocuments({ isFeatured: true });
    res.status(200).json({ ok: true, data: cards, total });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ ok: false, error: "Failed to fetch featured cards" });
  }
});

router.get("/tags", async (_, res) => {
  try {
    const tags = await Card.distinct("tags");
    res.status(200).json({ ok: true, data: tags });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch tags" });
  }
});

router.get("/:id/skills", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ ok: false, error: "Card ID is required" });

    const card = await Card.findById(id);
    if (!card)
      return res.status(404).json({ ok: false, error: "Card not found" });

    const skills = await Card.find({
      "skillDetails.relatedProjects": card._id,
    });
    if (!skills)
      return res.status(404).json({ ok: false, error: "Skills not found" });

    res.status(200).json({ ok: true, data: skills });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch skills" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ ok: false, error: "Card ID is required" });

    const card = await Card.findById(id).populate(
      "skillDetails.relatedProjects"
    );
    if (!card)
      return res.status(404).json({ ok: false, error: "Card not found" });

    res.status(200).json({ ok: true, data: card });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch card" });
  }
});

router.post("/", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json({ ok: true, data: card });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to create card" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ ok: false, error: "Card ID is required" });

    const card = await Card.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ ok: true, data: card });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to update card" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ ok: false, error: "Card ID is required" });

    await Card.findByIdAndDelete(id);
    res.status(204).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to delete card" });
  }
});

module.exports = router;
