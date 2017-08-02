const isWeekdays = require('../isWeekdays.js');
const assert = require('assert');
describe("isWeekdays",function(){
  it("should return 'true' when given '!day.startsWith('s')'", function(){
    assert.equal(isWeekdays('monday'),true);
  });
  it("should return false when given day.startsWith('s')", function(){
    assert.equal(isWeekdays('sunday'),false);
  });
});
