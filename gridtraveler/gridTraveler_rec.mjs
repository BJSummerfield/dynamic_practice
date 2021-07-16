import Tests from './gridTraveler_tests.mjs'

const tests = new Tests

const gridTraveler = ( columns, rows, memo = {} ) => {
  if ( columns == 0 || rows == 0 ) return 0;
  if ( columns == 1 && rows == 1 ) return 1;
  if ( `${columns},${rows}` in memo ) return memo[`${columns},${rows}`];
  if ( `${rows},${columns}` in memo ) return memo[`${rows},${columns}`];  

  memo[`${columns},${rows}`] = gridTraveler( columns - 1, rows, memo ) + gridTraveler( columns, rows - 1, memo);
  
  return memo[`${columns},${rows}`];
};

for (let test of tests.cases) {
  console.log( gridTraveler( test[0], test[1] ));
}

