'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Censos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idestado: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      idmunicipio: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      actividad: {
        type: Sequelize.STRING
      },
      UE: {
        type: Sequelize.STRING
      },
      H001A: {
        type: Sequelize.STRING
      },
      H010A: {
        type: Sequelize.STRING
      },
      A111A: {
        type: Sequelize.STRING
      },
      A211A: {
        type: Sequelize.STRING
      },
      M091A: {
        type: Sequelize.STRING
      },
      H010D: {
        type: Sequelize.STRING
      },
      H020A: {
        type: Sequelize.STRING
      },
      I000A: {
        type: Sequelize.STRING
      },
      I100A: {
        type: Sequelize.STRING
      },
      I200A: {
        type: Sequelize.STRING
      },
      K000A: {
        type: Sequelize.STRING
      },
      K020A: {
        type: Sequelize.STRING
      },
      K311A: {
        type: Sequelize.STRING
      },
      K040A: {
        type: Sequelize.STRING
      },
      K041A: {
        type: Sequelize.STRING
      },
      K050A: {
        type: Sequelize.STRING
      },
      K620A: {
        type: Sequelize.STRING
      },
      K060A: {
        type: Sequelize.STRING
      },
      K810A: {
        type: Sequelize.STRING
      },
      K090A: {
        type: Sequelize.STRING
      },
      A700A: {
        type: Sequelize.STRING
      },
      M000A: {
        type: Sequelize.STRING
      },
      M020A: {
        type: Sequelize.STRING
      },
      M090A: {
        type: Sequelize.STRING
      },
      A800A: {
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Censos');
  }
};