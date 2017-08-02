var yearsAgo = function(year1,year2){
  var y1 =  new Date(year1);
  var y2 = new Date(year2);
  results = Number(y1.getFullYear()-y2.getFullYear());
console.log(results);
return results;
}
yearsAgo('2016-03-01','1999-02-03');
module.exports = yearsAgo;
