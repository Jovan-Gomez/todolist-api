'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tokens extends Model {
  
    static associate(models) {
      // define association here
      Tokens.belongsTo(models.Users, {
        foreignKey: 'user_id'
      });
    }
  };
  Tokens.init({
    token: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    used: DataTypes.BOOLEAN,
    type: DataTypes.ENUM('verify', 'reset'),
  }, {
    sequelize,
    modelName: 'Tokens',
    tableName: 'tokens',
  });
  return Tokens;
};