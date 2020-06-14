# JavaScript Testing Calculator

Unit Testing Calculator functions using Mocha and UI Integration Tests using Protractor JS and Chai for assertions


## Unit tests done in /tests/unit/calculator_spec.js

### Following functions tested:

* calculator.add() 
* calculator.subtract() 
* calculator.multiply() 
* calculator.divide() 
* calculator.numberClick() 
* calculator.operatorClick()
* calculator.clearClick() 

## UI integration tests done in /tests/integration/tests.js

### Following requirements tested

* Do the number buttons update the display of the running total?
* Do the arithmetical operations update the display with the result of the operation?
* Can multiple operations be chained together?
* Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
* if you divide by zero, what is the effect? Write a test to describe what you’d prefer to happen, and then correct the code to make that test pass 

## SetUp

* To install project dependencies: npm install
* To run the server: npm run server:dev
* To view application visit ‘http://localhost:3000’
* To run the unit tests with Mocha: npm test
* To run the UI integration tests with Protractor:
* Run npm run webdriver-update to update the webdriver server that the integration tests run on.
* With your localhost:3000 server still running, open a new tab in Terminal and run npm run webdriver
* Leave that server running, and in a new tab in Terminal run npm run protractor to run the integration tests.

