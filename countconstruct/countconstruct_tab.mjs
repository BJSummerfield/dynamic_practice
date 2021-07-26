import Tests from './countconstruct_tests.mjs'

const tests = new Tests

const countConstruct = (target, wordBank) => {
  const table = new Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] != 0) {
      for (let word of wordBank) {
        if (target.slice(i).indexOf(word) === 0) {
          table[i + word.length] += table[i];
        }
      }
    }
  }
  return table[target.length];
};

for (let test of tests.cases) {
  console.log(countConstruct(test[0],test[1]));
};
