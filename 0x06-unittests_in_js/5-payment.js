const Utils = require('./utils');

module.exports = function (totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
};
