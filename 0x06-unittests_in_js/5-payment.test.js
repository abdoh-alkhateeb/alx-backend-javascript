const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let spy = null;

  beforeEach(() => {
    if (spy === null) {
      spy = sinon.spy(console);
    }
  });

  afterEach(() => {
    spy.log.resetHistory();
  });

  it('should test sendPaymentRequestToApi with 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spy.log.calledWith('The total is: 120'));
    expect(spy.log.callCount).to.be.equal(1);
  });

  it('should test sendPaymentRequestToApi with 10, and 10', function () {
    sendPaymentRequestToApi(10, 10);

    expect(spy.log.calledWith('The total is: 20'));
    expect(spy.log.callCount).to.be.equal(1);
  });
});
