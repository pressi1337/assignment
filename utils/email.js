const nodemailer = require("nodemailer");
const schedule = require("node-schedule");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.scheduleEmails = (schedule, employeeIds, comment) => {
  const emailTimes = [
    new Date(schedule.scheduleDate.getTime() - 60 * 60 * 1000),
    new Date(schedule.scheduleDate.getTime() - 30 * 60 * 1000),
    new Date(schedule.scheduleDate.getTime() - 15 * 60 * 1000),
  ];

  //   emailTimes.forEach((time) => {
  //     schedule.scheduleJob(time, async () => {
  //       const employees = await Employee.findAll({ where: { id: employeeIds } });
  //       employees.forEach(({ email }) => {
  //         transporter.sendMail(
  //           {
  //             from: process.env.EMAIL,
  //             to: email,
  //             subject: "Schedule Reminder",
  //             text: `Reminder: ${comment}\nScheduled at: ${schedule.scheduleDate}`,
  //           },
  //           (err) => {
  //             if (err) console.error("Email error:", err);
  //           }
  //         );
  //       });
  //     });
  //   });
};
