import Tests from './bestsum_tests.mjs'

const tests = new Tests

const bestSum = (target, numbers) => {
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

for (let test of tests.cases) {
  console.log(bestSum( test[0],test[1] ));
};