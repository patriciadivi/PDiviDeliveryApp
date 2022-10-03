'use strict';

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    urlImage: {
      field: "url_image",
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'products',
    timestamps: false,
  });

  return Products;
}
