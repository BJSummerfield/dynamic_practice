import TestSuite from '../tests/testsuite.mjs'

const gridTraveler = ( array ) => {
  const columns = array[0]
  const rows = array[1]
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

const testSuite = new TestSuite
testSuite.run(gridTraveler,testSuite.gridTraveler())
