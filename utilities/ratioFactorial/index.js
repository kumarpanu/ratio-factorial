const ratio = require("../ratio/index.js");

const factorial = require("../factorial/index.js");

const ratioFactorial = (num1, num2, num3) => {
  const ratioTwo = ratio(num1, num2);
  const factorialOne = factorial(num3);
  return { ratioTwo, factorialOne };
};

module.exports = ratioFactorial;
