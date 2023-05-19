// 1 - exemplor decorator

function myDecorator(){
  console.log("iniciando decorator!");
  //esse retorno é o padrão
  return function(
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor){
    console.log("Executando o decorator");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);

  }
}
class MyClass {
  
  @myDecorator() // aparece esse erro mas compila ate a metade
  teste(){
    console.log("Terminando execução do método!")
  }
}

const myObj = new MyClass();

myObj.teste()

// 2 - multiplos decorators
function a(){
  return function(
    target: any,
    propertKey:string,
    descriptor: PropertyDescriptor
  ){
    console.log("executou a.")
  }
}
function b(){
  return function(
    target: any,
    propertKey:string,
    descriptor: PropertyDescriptor
  ){
    console.log("executou b.")
  }
}


class MultipleDecorators{
  // os demais decorators
  @a() // segundo
  @b() // primeiro
  testing(){
    console.log("Terminando execução do método")
  }
}

const multiple = new MultipleDecorators()

multiple.testing()