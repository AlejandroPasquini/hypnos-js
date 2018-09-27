'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('company_services', [{
        id: 1,
        company_uuid: '0002-0001',
        payment_system_id: 1,
        service_type_id: 1,
        name: "A class",
        price: 150,
        start_date: "2018-01-01",
        created_at: "2018-01-01",
        updated_at:  "2018-01-01"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    
   
      return queryInterface.bulkDelete('company_services', null, {});
    
  }
};
