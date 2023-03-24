import { DataTypes } from "sequelize";
import sequelize from "../repository/connection.js";
import Animal from "./animal.model.js";

const Service = sequelize.define(
  "servicos",
  {
    servicoId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: (DataTypes.DECIMAL.types.postgres = ["numeric"]),
      allowNull: false,
    },
  },
  { underscored: true }
);

Service.belongsTo(Animal, { foreignKey: "animalId" });
export default Service;
