import Tests from './fib_tests.mjs';

const tests = new Tests;

const fib = ( num, memo = {} ) => {
   if ( num <= 2 ) return 1;
   if ( num in memo ) return memo[num];

   memo[num] = fib( num - 1, memo ) + fib( num - 2, memo );
   
   return memo[num];
};

for ( let test of tests.cases ) {
  console.log( fib(test) );
}