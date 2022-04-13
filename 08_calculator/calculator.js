const add = function (m, n) {
  return m + n;
};

const subtract = function (m, n) {
  return m - n;
};

const sum = function (nums) {
  return nums.reduce((acc, n) => acc + n, 0);
};

const multiply = function (nums) {
  return nums.reduce((acc, n) => acc * n, 1);
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (num) {
  num = parseInt(num);
  if (Number.isNaN(num)) {
    throw new TypeError(`${num} is not a number.`);
  }

  if (num < 0) {
    throw new TypeError("Factorials of negative numbers are undefined.");
  }

  // default value is the factorial of 0
  let acc = 1;
  while (num > 1) {
    acc *= num;
    num--;
  }

  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
