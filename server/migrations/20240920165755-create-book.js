'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('Books', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
          },
          title: {
            allowNull: false,
            type: Sequelize.STRING
          },
          author: {
            allowNull: false,
            type: Sequelize.STRING
          },
          publishedDate: {
            allowNull: true,
            type: Sequelize.DATE
          },
          genre: {
            allowNull: false,
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
      })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};