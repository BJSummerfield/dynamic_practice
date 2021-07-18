import Tests from './howsum_tests.mjs'

const tests = new Tests

const howSum = ( target, numbers, memo = {}) => {
  if ( target in memo) return memo[target];
  if ( target === 0 ) return [];
  if ( target < 0 ) return null;
  
  for (let num of numbers) {
    const remainder = howSum(target - num, numbers, memo); 
    if (remainder !== null) {
      memo[target] = [ ...remainder, num];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
};

for (let test of tests.cases) {
  console.log(howSum( test[0],test[1] ));
};

