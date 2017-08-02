const isFromBellville =  require('../isFromBellville');
const assert = require('assert');

describe("isFromBellville", function(){
  it("should return 'true' when given 'bellville.startsWith('cy 2365476')'", function(){
    assert.equal(isFromBellville('cy 2365476'),true);
  });
  it("should return false when given bellville.startsWith('cj 456321')", function(){
    assert.equal(isFromBellville('cj 456321'), false);
  });
});
