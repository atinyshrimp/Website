const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema(
  {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    unlocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const activitySchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    happenedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

const interestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  highlight: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
});

const profileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  avatar: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  socials: {
    type: {
      linkedin: { type: String },
      github: { type: String },
      itchio: { type: String },
    },
  },
  resume: { type: String },
  achievements: [achievementSchema],
  activities: [activitySchema],
  interests: [interestSchema],
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
