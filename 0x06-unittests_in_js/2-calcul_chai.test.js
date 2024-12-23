const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it('should round both numbers and return result depending on type', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
