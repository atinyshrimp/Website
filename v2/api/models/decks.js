const { Schema, model } = require("mongoose");

const deckSchema = new Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String },
    description: { type: String, required: true },
    cards: { type: [String], ref: "Card", default: [] },
  },
  { timestamps: true }
);

const Deck = model("Deck", deckSchema);

module.exports = Deck;
