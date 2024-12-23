const express = require("express");
const { createSchedule } = require("../controllers/scheduleController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createSchedule);

module.exports = router;
