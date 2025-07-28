const express = require("express");
const Deck = require("../models/decks");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    let decks = await Deck.find().populate("cards");
    if (limit) decks = decks.slice(0, parseInt(limit));

    const total = await Deck.countDocuments();

    res.status(200).json({ ok: true, data: decks, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch decks" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ ok: false, error: "Deck ID is required" });

    let deck = await Deck.findById(id);
    if (!deck)
      return res.status(404).json({ ok: false, error: "Deck not found" });

    deck = await deck.populate("cards");

    res.status(200).json({ ok: true, data: deck });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to fetch deck" });
  }
});

router.post("/", async (req, res) => {
  try {
    let deck = await Deck.create(req.body);
    deck = await deck.populate("cards");
    res.status(201).json({ ok: true, data: deck });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to create deck" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ ok: false, error: "Deck ID is required" });

    let deck = await Deck.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!deck)
      return res.status(404).json({ ok: false, error: "Deck not found" });

    deck = await deck.populate("cards");

    res.status(200).json({ ok: true, data: deck });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to update deck" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ ok: false, error: "Deck ID is required" });

    await Deck.findByIdAndDelete(id);
    res.status(204).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Failed to delete deck" });
  }
});

module.exports = router;
