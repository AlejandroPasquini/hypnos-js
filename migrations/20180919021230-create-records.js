'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("records", {
      id: {
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      payment: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      is_payment: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      start_period: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      end_period: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      due_date: {
        allowNull: false,
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
    return queryInterface.dropTable('records');
  }
};