import Tests from './countconstruct_tests.mjs'

const tests = new Tests

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalways = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      totalways += countConstruct(target.slice(word.length), wordBank, memo);
      memo[target] = totalways;
    }
  }
  return totalways;
};

for (let test of tests.cases) {
  console.log(countConstruct(test[0],test[1]))
}
