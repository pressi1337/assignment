const { Model, DataTypes } = require("sequelize");
class Schedule extends Model {
  static initModel(sequelize) {
    Schedule.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        adminId: { type: DataTypes.INTEGER, allowNull: false },
        scheduleDate: { type: DataTypes.DATE, allowNull: false },
        comment: { type: DataTypes.STRING, allowNull: false },
      },
      { sequelize, modelName: "Schedule" }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "adminId", as: "admin" });
    this.hasMany(models.EmployeeSchedule, { foreignKey: "scheduleId" });
  }
}
module.exports = Schedule;
