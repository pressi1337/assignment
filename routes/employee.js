const express = require("express");
const { getEmployees } = require("../controllers/employeeController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authenticate, getEmployees);

module.exports = router;
