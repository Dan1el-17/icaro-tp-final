'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      })
    }
  }
  Address.init({
    userId: DataTypes.INTEGER,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    apartment: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};