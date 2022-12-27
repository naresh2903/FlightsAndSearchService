'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // a city has many airports
      this.hasMany(models.Airport,{
        foreignKey:'city_id'
      });
    }
  }
  City.init({
    name: {type : DataTypes.STRING ,
       allowNull:false,
       unique:true
      }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};