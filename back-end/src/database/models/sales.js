'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      field: "user_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    sellerId: {
      field: "seller_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    totalPrice: {
      field: "total_price",
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deliveryAddress: {
      field: "delivery_address",
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryNumber: {
      field: "delivery_number",
      type: DataTypes.STRING,
      allowNull: false
    },
    saleDate: {
      field: "sale_date",
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente',
    }
  }, {
    tableName: 'sales',
    timestamps: false
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {
      through: Sales,
      foreignKey: 'userId',
      as: 'user',
    });
  };

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {
      through: Sales,
      foreignKey: 'sellerId',
      as: 'seller',
    });
  }

  return Sales;
}
