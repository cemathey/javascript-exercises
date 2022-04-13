const fibonacci = function (nth) {
  // Recursive fibonacci without memoizing is evil!
  // Iteratively calculate/store fibonacci numbers
  let fibs = [1, 1];

  nth = parseInt(nth);

  if (!nth || nth < 0) return "OOPS";

  switch (nth) {
    // Use the classical definition where fib(0) = 0
    case 0:
      return 0;
    case 1:
    case 2:
      return 1;
  }

  // After validating and checking for the 1st or 2nd fib
  // Start on the 3rd fib and calculate up to it
  for (let i = 2; i < nth; i++) {
    let newFib = fibs[i - 1] + fibs[i - 2];
    fibs.push(newFib);
  }

  return fibs.slice(-1)[0];
};

// Do not edit below this line
module.exports = fibonacci;
