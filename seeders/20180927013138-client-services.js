'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('service_types', [{
        id: 1,
        created_at: "2018-01-01",
        updated_at:  "2018-01-01"
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('service_types', null, {});
    
  }
};
