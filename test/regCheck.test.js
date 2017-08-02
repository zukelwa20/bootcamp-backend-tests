const assert = require('assert');
const regCheck = require('../regCheck.js');
describe("regCheck", function(){
  it("should return 'true' when given 'regNum.startsWith(location)'", function(){
    assert.equal(regCheck("GP 563114","GP"),true);
  });
  it("should return true when given regNum.startsWith(location)", function(){
    assert.equal(regCheck("L 456321","L"),true);
  });
});
