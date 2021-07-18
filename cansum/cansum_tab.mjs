import Tests from './cansum_tests.mjs';

const tests = new Tests;

const canSum = (target, numbers) => {
  const table = new Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if ( table[table.length -1] === true) return true
    if ( table[i] === true ) {
      for (let j = 0; j <= numbers.length -1; j++) {
        if (i + numbers[j] <= target ) table[i + numbers[j]] = true; 
      };
    };
  };

  return table[target];
};

for (let test of tests.cases) {
  console.log(canSum(test[0],test[1]));
};