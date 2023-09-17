'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      })
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    products: DataTypes.TEXT,
    total: DataTypes.DECIMAL,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};