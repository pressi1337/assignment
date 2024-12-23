const express = require("express");
const { sequelize } = require("./src/models");
const authRoutes = require("./src/routes/auth");
const scheduleRoutes = require("./src/routes/schedule");
const employeeRoutes = require("./src/routes/employee");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/employees", employeeRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");
});

module.exports = app;
