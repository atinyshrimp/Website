const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/mongo");
const CONFIG = require("./config");

const cardController = require("./controllers/cards");
const deckController = require("./controllers/decks");
const activityController = require("./controllers/activities");
const achievementController = require("./controllers/achievements");
const interestController = require("./controllers/interests");

connectDB();

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://192.168.1.150:3000",
      "https://joycelapilus.com",
    ],
    credentials: true, // Allow cookies to be sent
  })
); // CORS middleware
app.use(express.json({ limit: "2mb" })); // body-parser

app.get("/", (_, res) => res.json({ message: "TCG Portfolio API 🎴" }));

app.use("/cards", cardController);
app.use("/decks", deckController);
app.use("/activities", activityController);
app.use("/achievements", achievementController);
app.use("/interests", interestController);

/* Global error handler */
app.use((err, _, res, __) => {
  console.error(err);
  res.status(500).json({ error: err.message || "Server error" });
});

app.listen(CONFIG.PORT, () =>
  console.log(`API up on http://localhost:${CONFIG.PORT}`)
);
