const sum = require('../utils/sum');
const { expect } = require('chai');

describe('sum', function() {
  it('adds two numbers', function() {
    expect(sum(2, 3)).to.equal(5);
  });
});
