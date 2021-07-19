import Tests from './bestsum_tests.mjs'

const tests = new Tests

const bestSum = ( target, numbers, memo = {} ) => {
  if ( target in memo ) return memo[target];
  if ( target === 0 ) return [];
  if ( target < 0 ) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = ( bestSum(target - num, numbers, memo));
    if (remainder !== null) {
      const combination = [ ...remainder, num]
      if (shortestCombination === null ||combination.length < shortestCombination.length) {
        shortestCombination = combination
      };
    };
  };
  memo[target] = shortestCombination;
  return shortestCombination;
};


for (let test of tests.cases) {
  console.log(bestSum( test[0],test[1] ));
};