const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    description: { type: String, required: true },
    happenedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
