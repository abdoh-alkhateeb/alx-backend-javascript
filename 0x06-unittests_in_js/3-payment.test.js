const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should use Utils.calculateNumber properly', function () {
    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);

    spy.calculateNumber.restore();
  });
});
