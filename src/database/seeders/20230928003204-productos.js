"use strict";
const productsJSON = require('../../data/productsDataBase.json');
const productsDB = productsJSON.map(({name,price,discount,category,description,image}) => {
  return {
    name,
    price,
    discount,
    categoryId : category === "visited" ? 1 : 2,
    description,
    image,
    createdAt : new Date(),
    updatedAt : new Date()
  }
})

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      productsDB,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
