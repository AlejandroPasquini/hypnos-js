'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('clients', [{
        firstname: 'Alejandro',
        lastname: 'Pasquini',
        email: "alejandronp9+client@gmail.com",
        uuid: '0001-0001',
        created_at: "2018-01-01",
        updated_at:  "2018-01-01"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    
   
      return queryInterface.bulkDelete('clients', null, {});
    
  }
};
