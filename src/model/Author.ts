import { DataTypes, Model } from "sequelize";
import sequelize from "./../config/dbConfig";

class Author extends Model {
  public id!: number;
  public name!: string;
  public email!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Author.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "authors",
  }
);

export default Author;
