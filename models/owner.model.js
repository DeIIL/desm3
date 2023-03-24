import { DataTypes } from "sequelize";
import sequelize from "../repository/connection.js";

const Owner = sequelize.define(
  "proprietarios",
  {
    proprietarioId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);
export default Owner;
