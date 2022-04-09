const repeatString = function (str, count) {
  if (count < 0) {
    return "ERROR";
  }

  strings = [];

  for (let i = 0; i < count; i++) {
    strings.push(str);
  }

  return strings.join("");
};

// Do not edit below this line
module.exports = repeatString;
