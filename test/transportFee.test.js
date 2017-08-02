const transportFee = require('../transportFee.js');
const assert = require('assert');
describe("transportFee", function(){
  it("should return 'R20' when given 'morning'", function(){
    assert.equal(transportFee('morning'), "R20");
  });
  it("should return 'R10' when given afternoon", function(){
    assert.equal(transportFee('afternoon'),'R10');
  });
});
