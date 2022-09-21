const { sales } = require('./models/');
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'users',
    timestamps: false,
  });

  users.belongsTo(sales, { foreignKey: "userId", as: "id" });
  users.belongsTo(sales, { foreignKey: "sellerId", as: "id" });

  sales.hasMany(users, { foreignKey: "userId", as: "id" });
  sales.hasMany(users, { foreignKey: "sellerId", as: "id" });


  return users;
};