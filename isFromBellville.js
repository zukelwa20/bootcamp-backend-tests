var isFromBellville = function(bellville){
registrationPlate = bellville.startsWith('cy');
return registrationPlate;
}
console.log(isFromBellville('cy2365476'));
module.exports = isFromBellville;
