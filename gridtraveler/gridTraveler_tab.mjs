import Tests from './gridTraveler_tests.mjs'

const tests = new Tests

const gridTraveler = ( columns, rows ) => {
  const table = Array( columns + 1 ).fill().map( () => Array( rows + 1 ).fill(0));
  table[1][1] = 1;

  for (let c = 0; c <= columns; c++) {
    for (let r = 0; r <= rows; r++ ) {
      const current = table[c][r];
      if ( c < columns ) table[c + 1][r] += current;
      if ( r < rows ) table[c][r + 1] += current;
    };
  };

  return table[columns][rows];
};

for (let test of tests.cases) {
  console.log(gridTraveler( test[0],test[1] ));
};