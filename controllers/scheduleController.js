const { Schedule, EmployeeSchedule, Employee } = require("../models");
const { scheduleEmails } = require("../utils/email");

exports.createSchedule = async (req, res) => {
  const { employeeIds, scheduleDate, comment } = req.body;
  const adminId = req.user.id;

  try {
    const schedule = await Schedule.create({ adminId, scheduleDate, comment });
    const employeeSchedules = employeeIds.map((id) => ({
      scheduleId: schedule.id,
      employeeId: id,
    }));
    await EmployeeSchedule.bulkCreate(employeeSchedules);
    //scheduleEmails(schedule, employeeIds, comment);
    res.json({ message: "Schedule created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
