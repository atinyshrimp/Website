const { Schema, model } = require("mongoose");

const achievementSchema = new Schema(
  {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    unlocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Achievement = model("Achievement", achievementSchema);

module.exports = Achievement;
