module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        name: 'John',
        qty: "1",
        picture: "110110101",
        expiredAt: new Date(),
        isActive: true
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };