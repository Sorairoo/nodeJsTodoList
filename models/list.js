'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      list.hasMany(models.Todo);
    }
  };
  list.init({
    name: DataTypes.STRING,
    userId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'List',
  });
  return list;
};