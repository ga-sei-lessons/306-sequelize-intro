'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pets_toys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // for join tables, we don't put any association here
    }
  }
  pets_toys.init({
    toyId: DataTypes.INTEGER,
    petId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pets_toys',
  });
  return pets_toys;
};