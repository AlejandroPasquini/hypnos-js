'use strict';
module.exports = (sequelize, DataTypes) => {
  const invoices_records = sequelize.define('invoices_records', {
    firstName: DataTypes.STRING
  }, {});
  invoices_records.associate = function(models) {
    // associations can be defined here
  };
  return invoices_records;
};