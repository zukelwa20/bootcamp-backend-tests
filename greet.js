//const assert = require('assert');

var greet = function(name){
return ('hello'+ name);
}
console.log(greet(' bob'));
//assert.equal(greet(' bob'),'hello bob');
module.exports = greet;
