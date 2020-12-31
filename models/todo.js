'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todo.belongsTo(models.List);
    }
  };
  todo.init({
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    listId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return todo;
};