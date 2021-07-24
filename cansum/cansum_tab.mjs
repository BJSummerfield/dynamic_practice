import TestSuite from '../tests/testsuite.mjs'

const canSum = (array) => {
  let target = array[0];
  let numbers = array[1];
  const table = new Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if ( table[table.length -1] === true) return true
    if ( table[i] === true ) {
      for (let j = 0; j <= numbers.length - 1; j++) {
        if (i + numbers[j] <= target ) table[i + numbers[j]] = true; 
      };
    };
  };

  return table[target];
};

const testSuite = new TestSuite
testSuite.run(canSum,testSuite.canSum())