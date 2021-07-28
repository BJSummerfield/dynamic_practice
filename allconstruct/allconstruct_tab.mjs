import Tests from './allconstruct_tests.mjs'

const tests = new Tests

const allConstruct = (target, wordBank) => {
  const table = new Array(target.length + 1).fill().map( () => new Array)

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map(subArray => [ ...subArray, word])
        table[i + word.length].push(...newCombinations)
      }
    }
  }
  return table[target.length]
};

for (let test of tests.cases) {
  console.log(allConstruct(test[0],test[1]));
};
