const bestdeal = require('../bestdeal');
const assert = require('assert');
var bestdeal = require('../bestdeal');
var assert = require('assert');

describe("bestdeal", function(){

    it("convert the string into an array (split out the quantity and the price);'", function(){
        assert.equal(length("zebras are cool!"), 16);
    });

    it("should return 0 for the string ''", function(){
        assert.equal(length(""), 0);
    });

});
