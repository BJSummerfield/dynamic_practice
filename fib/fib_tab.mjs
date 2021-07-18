import Tests from './fib_tests.mjs';

const tests = new Tests;

const fib = (num) => {
  if ( num == 0) return null;
  if ( num <= 2) return 1;

  let table = Array( num + 1 ).fill(0);
  table[1] = 1;
  
  for (let i = 2; i <= num; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }
  return table[num];
};

for (let test of tests.cases) {
  console.log( fib(test) );
};