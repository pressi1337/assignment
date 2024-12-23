const sequelize = require("../config/database");
const User = require("./User");
const Employee = require("./Employee");
const Schedule = require("./Schedule");
const EmployeeSchedule = require("./EmployeeSchedule");

User.initModel(sequelize);
Employee.initModel(sequelize);
Schedule.initModel(sequelize);
EmployeeSchedule.initModel(sequelize);

EmployeeSchedule.associate({ Schedule, Employee });
Schedule.associate({ User, EmployeeSchedule });

module.exports = { sequelize, User, Employee, Schedule, EmployeeSchedule };
