'use strict';
module.exports = (sequelize, DataTypes) => {
  const service_types = sequelize.define('service_types', {
    name: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, allowNull: false},
    updatedAt: { type: DataTypes.DATE, allowNull: false}
  }, {});
  service_types.associate = function(models) {
    // associations can be defined here
  };
  return service_types;
};