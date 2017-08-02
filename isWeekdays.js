//var assert = require('assert');
var isWeekdays = function(day){
var isDay = !day.startsWith("s");
//console.log(isDay);
return isDay;
}
console.log(isWeekdays('monday'));
//assert.equal(isWeekdays('monday'),true);
module.exports = isWeekdays;
