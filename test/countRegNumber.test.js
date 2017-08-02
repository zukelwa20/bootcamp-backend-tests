 const countRegNumber = require('../countRegNumber.js');
 const assert = require('assert');
describe("countRegNumber", function(){
  it("should return 'regList.length' when given 'CA 182736,CY 523519,CJ 812328'", function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3)
  });
  it("should return regList.RegLength when given regCount", function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
  });
});
