class TestSuite {
  run = (block, tests) => { 
    for( let test of tests ) {
      console.log("*************")
      console.log (`Input : ${test.target}`)
      console.log (`Expected : ${test.answer}`)
      console.log (`Yield : ${block(test.target)}`)
    }
    return
  }
  
  fib = () => {
    return [
      {target:2, answer:1},
      {target:7, answer:13},
      {target:19, answer:4181},
      {target:50, answer:12586269025}
    ]
  }

  gridTraveler = () => {
    return [
      {target:[3,3], answer:6},
      {target:[6,9], answer:1287},
      {target:[2,1], answer:1},
      {target:[32,40], answer:71416438784701300000},
    ]
  }

  canSum = () => {
    return [
      {target:[5,[3,2,5]], answer:true},
      {target:[12,[8,7,9]], answer:false},
      {target:[14,[2,4,7,10]], answer:true},
      {target:[300,[7,14]], answer:false}
    ]
  }   
  howSum = () => {
    return [
      {target:[5,[3,2,5]], answer:[2,3]},
      {target:[12,[8,7,9]], answer:null},
      {target:[14,[2,4,7,10]], answer:[2,2,2,2,2,2,2]},
      {target:[300,[7,14]], answer:null}
    ]
  } 
};

export default TestSuite