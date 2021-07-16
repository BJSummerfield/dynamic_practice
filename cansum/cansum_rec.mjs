import Tests from './cansum_tests.mjs'

const tests = new Tests

const canSum = (target, numbers, memo = {}) => {
  if ( target in memo ) return memo[target];
  if ( target === 0 ) return true;
  if ( target <= 0 ) return false;
  
  for (let n of numbers) {
    if ( canSum(target - n, numbers, memo ) === true) {
      memo[target] = true
      return memo[target];
    };
  };
  memo[target] = false
  return memo[target]
};

for (let test of tests.cases) {
  console.log(canSum(test[0],test[1]));
};



