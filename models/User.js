const { Model, DataTypes } = require("sequelize");
class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        email: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false },
      },
      { sequelize, modelName: "User" }
    );
  }
}
module.exports = User;
