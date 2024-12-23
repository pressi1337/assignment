const { Model, DataTypes } = require("sequelize");
class EmployeeSchedule extends Model {
  static initModel(sequelize) {
    EmployeeSchedule.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        scheduleId: { type: DataTypes.INTEGER, allowNull: false },
        employeeId: { type: DataTypes.INTEGER, allowNull: false },
      },
      { sequelize, modelName: "EmployeeSchedule" }
    );
  }

  static associate(models) {
    this.belongsTo(models.Schedule, { foreignKey: "scheduleId" });
    this.belongsTo(models.Employee, { foreignKey: "employeeId" });
  }
}
module.exports = EmployeeSchedule;
