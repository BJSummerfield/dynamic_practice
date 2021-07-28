import Tests from './allconstruct_tests.mjs'

const tests = new Tests

const allConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays =  allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}

for (let test of tests.cases) {
  console.log(allConstruct(test[0],test[1]));
};
