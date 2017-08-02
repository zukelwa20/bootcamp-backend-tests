const countAllPaarl = require('../countAllPaarl.js');
const assert = require('assert');
describe("countAllPaarl", function(){
  it("should return 'paarlReg.length' when given 'CJ 123456, CY 456987, CJ 456321, CJ 456987, CA 789654'", function(){
  assert.equal(countAllPaarl('CJ 123456,CY 456987,CJ 456321,CJ 456987,CA 789654'),3);
  });
  it("should return regList[i].startsWith('CJ') when given 'CJ 123456, CY 456987, CJ 456321, CJ 456987, CA 789654'", function(){
    assert.equal(countAllPaarl('CJ 123456,CY 456987,CJ 456321,CJ 456987,CA 789654'),3);
  });
});
