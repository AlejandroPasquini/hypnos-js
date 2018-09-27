'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("client_services", {
      id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      company_service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      client_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      end_date: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('client_services');
  }
};