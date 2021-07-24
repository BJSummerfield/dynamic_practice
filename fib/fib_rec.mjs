import TestSuite from '../tests/testsuite.mjs'

const fib = ( num, memo = {} ) => {
   if ( num <= 2 ) return 1;
   if ( num in memo ) return memo[num];

   memo[num] = fib( num - 1, memo ) + fib( num - 2, memo );
   
   return memo[num];
};

const testSuite = new TestSuite
testSuite.run(fib,testSuite.fib())
