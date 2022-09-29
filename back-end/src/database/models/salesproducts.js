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
      tableName: 'sales_products',
      timestamps: false,
    }
  );

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      foreignKey: "saleId", otherKey: "productId", as: "products", through: salesProducts,
    })
    models.products.belongsToMany(models.sales, {
      foreignKey: "productId", otherKey: "saleId", as: "sales", through: salesProducts,
    })
  }

  return salesProducts;
};
