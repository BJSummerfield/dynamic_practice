import TestSuite from '../tests/testsuite.mjs'

const howSum = ( array, memo = {}) => {
  let target = array[0];
  let numbers = array[1];
  if ( target in memo) return memo[target];
  if ( target === 0 ) return [];
  if ( target < 0 ) return null;
  
  for (let num of numbers) {
    const remainder = howSum([target - num, numbers], memo); 
    if (remainder !== null) {
      memo[target] = [ ...remainder, num];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
};

const testSuite = new TestSuite
testSuite.run(howSum,testSuite.howSum())

