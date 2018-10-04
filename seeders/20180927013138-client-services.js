'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('client_services', [{
        id: 1,
        client_uuid: '0001-0001',
        company_service_id: 1,
        name: "www.asd.com hosting XL",
        price: 150,
        start_date: "2018-01-01",
        created_at: "2018-01-01",
        updated_at:  "2018-01-01"
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('client_services', null, {});
    
  }
};
