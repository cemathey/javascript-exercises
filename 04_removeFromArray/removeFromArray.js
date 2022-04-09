const removeFromArray = function (arr, ...toRemove) {
  return arr.filter((ele) => !toRemove.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
