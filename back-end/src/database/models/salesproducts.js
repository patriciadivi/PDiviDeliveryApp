"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  salesProducts.init(
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "sale_id",
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "product_id",
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "salesProducts",
      timestamps: false,
    }
  );

  salesProducts.belongsTo(sales, { foreignKey: "saleId", as: "id" });
  salesProducts.belongsTo(products, { foreignKey: "productId", as: "id" });
  // salesProducts.hasMany(sales, { foreignKey: "productId", as: "id" });
  // salesProducts.hasMany(products, { foreignKey: "saleId", as: "id" });

  return salesProducts;
};
