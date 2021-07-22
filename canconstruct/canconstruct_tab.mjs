import Tests from './canconstruct_tests.mjs'

const tests = new Tests

const canConstruct = (target, wordbank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  for ( let i = 0; i <= target.length; i++ ){
    if ( table[i] === true ) {
      for (let word of wordbank ) {
        if ( target.slice(i, i + word.length) === word ) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

for (let test of tests.cases) {
  console.log(canConstruct(test[0],test[1]));
};

