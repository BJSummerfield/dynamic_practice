import Tests from './howsum_tests.mjs'

const tests = new Tests

const howSum = ( target, numbers ) => {
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

for (let test of tests.cases) {
  console.log(howSum( test[0],test[1] ));
};

