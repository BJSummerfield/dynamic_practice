class TestSuite {
  run = (block, tests) => { 
    for( let test of tests ) {
      console.log("*************")
      console.log (`Input : ${test.input}`)
      console.log (`Expected : ${test.answer}`)
      console.log (`Yield : ${block(test.target)}`)
    }
    return
  }
  
  fib = () => {
    return [
      {input:2, answer:1},
      {input:7, answer:13},
      {input:19, answer:4181},
      {input:50, answer:12586269025}
    ]
  }

  gridTraveler = () => {
    return [
      {input:[3,3], answer:6},
      {input:[6,9], answer:1287},
      {input:[2,1], answer:1},
      {input:[32,40], answer:71416438784701300000},
    ]
  }

  canSum = () => {
    return [
      {input:{'target': 5, 'options':[3,2,5]}, answer:true},
      {input:{'target': 12, 'options':[8,7,9]}, answer:false},
      {input:{'target': 14, 'options':[2,4,7,10]}, answer:true},
      {input:{'target': 300, 'options':[7,14]}, answer:false}
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
  bestSum = () => {
    return [
      {target:[5,[3,2,5]], answer:[5]},
      {target:[12,[8,7,9]], answer:null},
      {target:[14,[2,4,7,10]], answer:[4,10]},
      {target:[300,[7,14]], answer:null}
    ]
  } 
};

export default TestSuite