const countAllFromTown = require('../countAllFromTown.js');
const assert =  require('assert');
describe("countAllFromTown", function(){
  it("should return 'fromTown.length' CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'", function(){
  assert.deepEqual(fromStellies, 3);
  });
  it("should return fromTown.length 'CL 124,CY 567,CL 345, CJ 456,CL 341', 'CY'", function(){
    assert.deepEqual(fromStellies,3);
  });
});
