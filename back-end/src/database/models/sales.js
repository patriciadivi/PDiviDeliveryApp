'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sales.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      secondaryKey: true,
      field: 'user_id',
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      secondaryKey: true,
      field: 'seller_id',
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10,2),
      field: 'total_price',
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_address',
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      field: 'delivery_number',
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'sales',
    timestamps: false,
  });

  sales.associate = (models) => {
    models.sales.belongsTo(models.users, { foreignKey: "userId", as: "customer" });
    models.sales.belongsTo(models.users, { foreignKey: "sellerId", as: "seller" });
  }

  return sales;
};
