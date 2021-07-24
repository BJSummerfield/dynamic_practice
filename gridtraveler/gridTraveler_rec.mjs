import TestSuite from '../tests/testsuite.mjs'

const gridTraveler = ( array, memo = {} ) => {
  const columns = array[0]
  const rows = array[1]
  if ( columns == 0 || rows == 0 ) return 0;
  if ( columns == 1 && rows == 1 ) return 1;
  if ( `${columns},${rows}` in memo ) return memo[`${columns},${rows}`];
  if ( `${rows},${columns}` in memo ) return memo[`${rows},${columns}`];  

  memo[`${columns},${rows}`] = gridTraveler( [columns - 1, rows], memo ) + gridTraveler( [columns, rows - 1], memo);
  
  return memo[`${columns},${rows}`];
};

const testSuite = new TestSuite
testSuite.run(gridTraveler,testSuite.gridTraveler())
