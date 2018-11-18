'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('payment_systems', [
      {
        id: 1,
        name: 'Unique',
        model: 'unique',
        custom_days: null,
        created_at: "2018-01-01",
        updated_at:  "2018-01-01"
      },
      {
        id: 2,
        name: 'Month',
        model: 'month',
        custom_days: null,
        created_at: "2018-01-01",
        updated_at:  "2018-01-01"
      }      
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('payment_systems', null, {});
    
  }
};
