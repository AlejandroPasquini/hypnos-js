'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("company_services", {
      id: {
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_uuid: {
        allowNull: false,
        type: Sequelize.UUID
      },
      payment_system_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      service_type_id: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('company_services');
  }
};