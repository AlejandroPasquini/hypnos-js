'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('companies', [{
        name: 'Pepe SA',
        email: "alejandronp9+company@gmail.com",
        uuid: '0002-0001',
        created_at: "2018-01-01",
        updated_at:  "2018-01-01"
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('companies', null, {});
    
  }
};
