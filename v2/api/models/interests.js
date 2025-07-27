const { Schema, model } = require("mongoose");

const interestSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  highlight: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
});

const Interest = model("Interest", interestSchema);

module.exports = Interest;
