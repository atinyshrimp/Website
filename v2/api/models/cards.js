const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ["project", "skill", "experience"],
    },
    imageUrl: { type: String },
    tags: { type: [String], required: true },
    links: { type: [{ label: String, url: String }] },
    isFeatured: { type: Boolean },

    projectDetails: {
      type: {
        duration: { type: String, required: true },
        technologies: { type: [String], required: true },
        role: { type: String },
        outcomes: { type: [String], required: true },
      },
    },

    skillDetails: {
      type: {
        proficiency: { type: Number, required: true },
        yearsOfExperience: { type: Number, required: true },
        relatedProjects: { type: [String], required: true, ref: "Card" },
      },
    },

    experienceDetails: {
      type: {
        company: { type: String, required: true },
        position: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, default: "Present" },
        location: { type: String, required: true },
        achievements: { type: [String], required: true },
      },
    },

    stats: {
      type: Schema.Types.Mixed,
      required: true,
      validate: {
        validator: function (stats) {
          // Validate based on card type
          const cardType = this.type;

          if (cardType === "project") {
            return (
              stats.creativity &&
              stats.impact &&
              stats.difficulty &&
              typeof stats.creativity === "number" &&
              typeof stats.impact === "number" &&
              typeof stats.difficulty === "number" &&
              stats.creativity >= 1 &&
              stats.creativity <= 5 &&
              stats.impact >= 1 &&
              stats.impact <= 5 &&
              stats.difficulty >= 1 &&
              stats.difficulty <= 5
            );
          } else if (cardType === "skill") {
            return (
              stats.mastery &&
              stats.usage &&
              stats.combo &&
              typeof stats.mastery === "number" &&
              typeof stats.usage === "number" &&
              typeof stats.combo === "number" &&
              stats.mastery >= 1 &&
              stats.mastery <= 5 &&
              stats.usage >= 1 &&
              stats.usage <= 5 &&
              stats.combo >= 1 &&
              stats.combo <= 5
            );
          } else if (cardType === "experience") {
            return (
              stats.collaboration &&
              stats.impact &&
              stats.growth &&
              typeof stats.collaboration === "number" &&
              typeof stats.impact === "number" &&
              typeof stats.growth === "number" &&
              stats.collaboration >= 1 &&
              stats.collaboration <= 5 &&
              stats.impact >= 1 &&
              stats.impact <= 5 &&
              stats.growth >= 1 &&
              stats.growth <= 5
            );
          }
          return false;
        },
        message: "Stats must match the card type and be numbers between 1-5",
      },
    },
  },
  { timestamps: true }
);

const Card = model("Card", cardSchema);

module.exports = Card;
