import TestSuite from '../tests/testsuite.mjs'

const canSum = (array, memo = {}) => {
  let target = array[0];
  let numbers = array[1];
  if ( target in memo ) return memo[target];
  if ( target === 0 ) return true;
  if ( target < 0 ) return false;
  
  for (let n of numbers) {
    if ( canSum([target - n, numbers], memo ) === true) {
      memo[target] = true
      return memo[target];
    };
  };
  memo[target] = false
  return memo[target]
};

const testSuite = new TestSuite
testSuite.run(canSum,testSuite.canSum())