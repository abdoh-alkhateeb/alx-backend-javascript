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

describe('available_payments endpoint suite', () => {
  it('should return proper response', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) {
        return done(error);
      }

      expect(response.statusCode).to.equal(200);

      let parsedBody;
      try {
        parsedBody = JSON.parse(body);
      } catch (e) {
        return done(e);
      }

      expect(parsedBody).to.be.an('object');
      expect(parsedBody).to.have.property('payment_methods');

      done();
    });
  });
});

describe('login endpoint suite', () => {
  it('should return proper response', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: true,
        body: { userName: 'chai' },
      },
      (error, response, body) => {
        if (error) {
          return done(error);
        }

        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome chai');

        done();
      }
    );
  });
});
