import TestSuite from '../tests/testsuite.mjs'

const bestSum = (array) => {
  let target = array[0];
  let numbers = array[1];
  const table = new Array(target + 1).fill(null)
  const shortestCombination = new Array
  
  table[0] = [];
  
  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {    
        let combination = [ ...table[i], num];
        if ( !table[i + num] || table[i + num].length > combination.length) {
          table[i+num] = combination;
        };
      };
    };
  };

  return table[target];
};

const testSuite = new TestSuite
testSuite.run(bestSum,testSuite.bestSum())