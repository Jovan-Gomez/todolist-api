'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
  
    static associate(models) {
      // define association here
      Users.hasMany(models.Tokens, {
        foreignKey: 'user_id'
      });
    }
  };
  Users.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_photo: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
  });

  Users.beforeCreate(async(user) => {
    try{
      let hash = await bcrypt.hash(user.password, 8); //Generamos el hash
      user.password = hash; //Asignamos el hash a la contraseña que se agregará a la DB
      return user.password; //Finalizamos
    }catch(error){
      throw new Error("No se pudo encriptar la contraseña");
    }
  });

  return Users;
};