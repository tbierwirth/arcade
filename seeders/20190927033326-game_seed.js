'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Games', [{
      title: 'World of Warcraft',
      price: 60,
      releaseYear: 2004,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Battlefield 1942',
      price: 60,
      releaseYear: 2002,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Counter Strike',
      price: 60,
      releaseYear: 2000,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Destiny',
      price: 60,
      releaseYear: 2014,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Games', null, {});
  }
};
