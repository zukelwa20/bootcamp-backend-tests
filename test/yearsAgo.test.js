const yearsAgo = require('../yearsAgo.js');
const assert = require('assert');
describe("yearsAgo", function(){
  it("should return  'Number(y1.getFullYear()-y2.getFullYear())' 'when given '2016-03-01','1999-02-03'",function(){
  assert.equal(yearsAgo('2016-03-01','1999-02-03'),17);
  });
  it("should return Number(y1.getFullYear()-y2.getFullYear()) when given '2017-03-01',1999-02-03'", function(){
    assert.equal(yearsAgo('2017-03-01','1999-02-03'),18);
  });
});
