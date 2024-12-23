const { Employee } = require("../models");

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
