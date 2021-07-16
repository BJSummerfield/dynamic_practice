import Tests from './isBalanced_tests.mjs';

const tests = new Tests

const isbalanced = (string) => {
  const stack = [];
  const brackets = {
    "(":")",
    "{":"}",
    "[":"]",
    "<":">"
  };

  for (let char of string) {
    if ( char in brackets ) stack.push(char);
    if ( Object.values(brackets ).includes(char)) {
      if ( brackets[stack.pop()] !== char ) return false
    };
  };

  return !stack.length;
};

for (let test of tests.cases) {
  console.log(isbalanced(test));
};
