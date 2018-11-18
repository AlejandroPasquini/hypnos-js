'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment_status = sequelize.define('payment_status', {
    firstName: DataTypes.STRING
  }, {});
  payment_status.associate = function(models) {
    // associations can be defined here
  };
  return payment_status;
};