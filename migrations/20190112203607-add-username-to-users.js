'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'username', {
      type: Sequelize.STRING
    }
    );
  }
};
