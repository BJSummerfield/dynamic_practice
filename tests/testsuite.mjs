class TestSuite {
  run = (block, tests) => { 
    for( let test of tests ) {
      let answer = block(test.target);
      console.log (`${test.description} : returned ${answer} : ${answer === test.answer ? 'Passed' : 'Failed'}`)
    }
  }
  
  fib = () => {
    return [
      {target:2, answer:1,description:'Fib 2 should equal 1'},
      {target:7, answer:13,description:'Fib 7 should equal 13'},
      {target:10, answer:55,description:'Fib 10 should equal 55'},
      {target:19, answer:4181,description:'Fib 19 should equal 4181'},
      {target:50, answer:12586269025,description:'Fib 50 should equal 12586269025'}
    ]
  }

  gridTraveler = () => {
    return [
      {target:[3,3], answer:6, description:'3x3 should return 6'},
      {target:[6,9], answer:1287, description:'6x9 should return 1287'},
      {target:[2,1], answer:1, description:'2x1 should return 1'},
      {target:[18,18], answer:2333606220, description:'18x18 should return 2333606220'},
      {target:[32,40], answer:71416438784701300000, description:'32x40 should return 71416438784701300000'}
    ]
  }

  canSum = () => {
    return [
      {target:[5,[3,2,5]], answer:true, description: "5, 3,2,5 yields true"},
      {target:[12,[8,7,9]], answer:false, description: "12, 8,7,9 yields false"},
      {target:[100,[1,2,25]], answer:true, description: "100, 1,2,25 yields true"},
      {target:[14,[2,4,7,10]], answer:true, description: "14, 2,4,7,10 yields true"},
      {target:[300,[7,14]], answer:false, description: "300, 7,14 yields false"}
    ]
  } 
};

export default TestSuite