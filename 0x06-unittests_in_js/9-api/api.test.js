const { expect } = require('chai');
const request = require('request');

describe('cart page suite', () => {
  it('should return proper response when ID is a number', (done) => {
    request.get('http://localhost:7865/cart/8', (error, response, body) => {
      if (error) {
        return done(error);
      }

      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 8');

      done();
    });
  });

  it('should return proper response when ID is not a number', (done) => {
    request.get('http://localhost:7865/cart/a', (error, response, body) => {
      if (error) {
        return done(error);
      }

      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('ID must be a number');

      done();
    });
  });
});
