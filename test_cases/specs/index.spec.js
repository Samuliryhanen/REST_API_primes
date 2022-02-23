var index = require("C:/node_prime_numbers/index.js");
var chai = require("chai");
var expect =  chai.expect;

describe("Test suit", function (){
    
    it("Test calculate_sum", function (){
        expect(index.calculate_sum("1,2,3")).to.be.equal(6);
        expect(index.calculate_sum("123")).to.be.equal(123);
        expect(index.calculate_sum("asd12321a,,aöd213")).to.be.equal(12534);
        expect(index.calculate_sum("")).to.be.equal(0);
        expect(index.calculate_sum("-123")).to.be.equal(-123);
        expect(index.calculate_sum("-123, 123, 14, -3")).to.be.equal(11);
        expect(index.calculate_sum("-1d2d3, 1asd23asd,asd 1ads4ad,a -a3ad")).to.be.equal(36);
    });

    it("Test check_prime", function(){
        expect(index.check_prime(7)).to.be.equal(true);
        expect(index.check_prime(8)).to.be.equal(false);
        expect(index.check_prime(7919)).to.be.equal(true);
        expect(index.check_prime(7918)).to.be.equal(false);
        expect(index.check_prime(12331889)).to.be.equal(true);
        expect(index.check_prime(12331888)).to.be.equal(false);
        expect(index.check_prime(12332597)).to.be.equal(true);

        expect(index.check_prime(888888888)).to.be.equal(false);
        expect(index.check_prime(8888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997)).to.be.equal(false);
    })
});