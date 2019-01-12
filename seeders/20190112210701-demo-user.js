'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Taylor',
      lastName: 'Cuneo',
      email: 'tc@gamerfeed.com',
      username: 'zergin',
      password: 'password',
      CreatedAt: new Date(),
      UpdatedAt: new Date()
    },{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      username: 'johndoe',
      password: 'password',
      CreatedAt: new Date(),
      UpdatedAt: new Date()       
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
