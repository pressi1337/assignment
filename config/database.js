const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("scheduling_system", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
