import TestSuite from '../tests/testsuite.mjs'

const canSum = (input, memo = {}) => {
  let target = input.target;
  let numbers = input.options;
  if ( target in memo ) return memo[target];
  if ( target === 0 ) return true;
  if ( target < 0 ) return false;
  
  for (let n of numbers) {
    if ( canSum({'target' : target - n, 'options': numbers}, memo ) === true) {
      memo[target] = true
      return memo[target];
    };
  };
  memo[target] = false
  return memo[target]
};

const testSuite = new TestSuite
testSuite.run(canSum,testSuite.canSum())