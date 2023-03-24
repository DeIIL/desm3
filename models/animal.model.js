import { DataTypes } from "sequelize";
import sequelize from "../repository/connection.js";
import Owner from "./owner.model.js";

const Animal = sequelize.define(
  "animais",
  {
    animalId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

Animal.belongsTo(Owner, { foreignKey: "proprietarioId" });
export default Animal;
