import Tests from './canconstruct_tests.mjs'

const tests = new Tests

const canConstruct = (target, wordbank, memo = {}) => {
  if ( target in memo ) return memo[target];
  if ( target === '' ) return true ;
  
  for ( let word of wordbank ) {
    if ( target.indexOf(word) === 0) {
      let suffix = target.slice(word.length)
      if (canConstruct(suffix, wordbank, memo) === true) {
        memo[target] = true
        return true;
      };
    };    
  };
  memo[target] = false
  return false;
};

for (let test of tests.cases) {
  console.log(canConstruct(test[0],test[1]));
};