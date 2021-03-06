import getTestValue from './src/getTestValue.js';

import expect from 'expect.js';

describe.only('__set__', function() {
	it('returns the correct value without mocking', function() {
    expect(getTestValue()).to.be(1);
  });

  it("returns the correct value with mocking", function() {
    getTestValue.__set__({
      test: 2000
    });

    expect(getTestValue()).to.be(2001);
  });
});
