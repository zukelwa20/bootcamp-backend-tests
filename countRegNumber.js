function countRegNumber(registration){
  var regList = registration.split(',');
console.log(regList.length);
  return regList.length;

}

var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
module.exports = countRegNumber;
