// 1 - type guard

function sum(a: number | string,b: number | string){
  if(typeof(a) === 'string' && typeof(b) === 'string'){
    console.log(parseFloat(a) + parseFloat(b));
  }
  else if(typeof(a) === 'number' && typeof(b) === 'number'){
    console.log(a + b);
  }
  else{
    console.log("Error")
  }
}

sum("1.3","2.0")
sum(3,2)
sum(3,"2")