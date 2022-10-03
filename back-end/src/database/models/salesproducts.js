'use strict';

module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      field: "sale_id",
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
    },
    productId: {
      field: "product_id",
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    tableName: 'sales_products',
  });

  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
    });
    models.Sales.belongsToMany(models.Products, {
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
    });
  };

  return SalesProducts;
}
