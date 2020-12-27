'use strict';

const bc = require('bcrypt');
const faker = require('faker');
faker.locale= 'it';
module.exports = {
  up: (queryInterface, Sequelize) => {
    let userData = [];
       for(let i =0 ; i<50; i++){
         userData.push({
           username: faker.name.findName(),
           email: faker.internet.email(),
           createdAt: new Date(),
           updatedAt: new Date(),
           password:bc.hashSync('sorairo', 12)
         });
       }
      return queryInterface.bulkInsert('users',userData , {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users', null, {});

  }
};