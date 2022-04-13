const findTheOldest = function (people) {
  return people.reduce((prev, curr) => {
    let prevAge =
      (prev.yearOfDeath ?? new Date().getFullYear()) - prev.yearOfBirth;
    let currAge =
      (curr.yearOfDeath ?? new Date().getFullYear()) - curr.yearOfBirth;

    return prevAge > currAge ? prev : curr;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
