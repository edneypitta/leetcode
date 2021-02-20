/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const openingChars = new Set(["(", "{", "["]);

  for (const char of s) {
    if (openingChars.has(char)) {
      stack.push(char);
      continue;
    }

    if (stack.pop() !== getOpeningChar(char)) return false;
  }

  return stack.length === 0;
};

var getOpeningChar = function (char) {
  switch (char) {
    case ")":
      return "(";
    case "}":
      return "{";
    case "]":
      return "[";
  }
};
