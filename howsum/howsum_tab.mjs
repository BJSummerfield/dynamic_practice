import TestSuite from '../tests/testsuite.mjs'

const howSum = ( array ) => {
  let target = array[0];
  let numbers = array[1];
  const table = new Array(target + 1).fill(null);

  table[0] = new Array;
  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
       table[i + num] = [ ...table[i], num];
      };
    };
  };
  return table[target]
};

const testSuite = new TestSuite
testSuite.run(howSum,testSuite.howSum())