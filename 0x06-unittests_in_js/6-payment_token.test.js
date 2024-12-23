const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return successful response from the API', async function () {
    const result = await getPaymentTokenFromAPI(true);

    expect(result).to.be.an('object');
    expect(result).to.have.property('data');
    expect(result.data).to.equal('Successful response from the API');
  });
});
