const greet =  require('../greet.js');
const assert = require('assert');
describe("greet", function(){
  it("should return 'hello bob' when given ' bob'", function(){
    assert.equal(greet(' bob'),'hello bob');
  });
  it("should return hello makho when given makho", function(){
  assert.equal(greet(' makho'),'hello makho');
});
});
