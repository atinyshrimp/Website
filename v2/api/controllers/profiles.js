const Profile = require("../models/profiles");
const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const profile = await Profile.findOne();
    res.status(200).json({ ok: true, data: profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const existingProfile = await Profile.findOne();
    if (existingProfile)
      return res
        .status(400)
        .json({ ok: false, error: "There can't be more than one profile" });

    const profile = await Profile.create(req.body);
    res.status(201).json({ ok: true, data: profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

router.put("/", async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, { new: true });
    res.status(200).json({ ok: true, data: profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

router.delete("/", async (_, res) => {
  try {
    await Profile.deleteOne();
    res.status(200).json({ ok: true, message: "Profile deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

module.exports = router;
