const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
	return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n-1) * n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
