const { Model, DataTypes } = require("sequelize");
class Employee extends Model {
  static initModel(sequelize) {
    Employee.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
      },
      { sequelize, modelName: "Employee" }
    );
  }
}
module.exports = Employee;
