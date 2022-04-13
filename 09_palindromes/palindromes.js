function normalizeString(str) {
  // Lowercase and strip punctuation from str

  str = str.toLowerCase();

  // In reality we would want a comprehensive list of punctuation
  const PUNCTUATION = [".", ",", "!"];
  const whiteSpace = new RegExp(/\s/);

  let newStr = [...str].filter(
    (char) => !PUNCTUATION.includes(char) && !whiteSpace.test(char)
  );

  return newStr.join("");
}

function equalArrays(first, second) {
  if (first.length !== second.length) return false;

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) return false;
  }

  return true;
}

const palindromes = function (str) {
  str = normalizeString(str);

  let normalizedStr = Array(...str);
  let revStr = Array(...normalizedStr).reverse();

  return equalArrays(normalizedStr, revStr);
};
// Do not edit below this line
module.exports = palindromes;
