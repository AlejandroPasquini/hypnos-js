'use strict';
module.exports = (sequelize, DataTypes) => {
  const service - types = sequelize.define('service-types', {
    name: DataTypes.STRING
  }, {});
  service - types.associate = function(models) {
    // associations can be defined here
  };
  return service - types;
};