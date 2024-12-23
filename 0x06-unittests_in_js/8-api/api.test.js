const { expect } = require('chai');
const request = require('request');

describe('index page suite', () => {
  it('should return proper response', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      if (error) {
        return done(error);
      }

      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');

      done();
    });
  });
});
