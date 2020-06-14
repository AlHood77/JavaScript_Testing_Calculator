var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add integer to running total', function () {
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5);
  })

  it('should subtract integer from running total', function () {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should multiply integer to running total', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('should divide integer by running total', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  it('should concatenate successive number inputs', function () {
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.equal(calculator.runningTotal, 123)
  })

  it('can chain multiple operations together', function () {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(3)
    calculator.operatorClick('/')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })

  it('can clear running total without affecting the calulation', function () {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(9)
    calculator.operatorClick('=')
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5)
  })

});
