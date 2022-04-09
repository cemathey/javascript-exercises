const ftoc = function (degrees) {
  let celsiusDegrees = (degrees - 32) * (5.0 / 9.0);
  return Math.round(celsiusDegrees * 10) / 10;
};

const ctof = function (degrees) {
  let fahrenheitDegrees = degrees * (9.0 / 5.0) + 32;
  return Math.round(fahrenheitDegrees * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
