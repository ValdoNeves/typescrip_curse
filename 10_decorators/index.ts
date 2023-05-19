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
  
  @myDecorator()
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

// 3 - decorator de classe 
function classDecorator(constructor:Function){
  console.log(constructor) // pegando a class
  if(constructor.name === "User"){ // nome da classe
    console.log("Criando usuário")
  }
}

@classDecorator
class User {
  name

  constructor(name:string){
    this.name = name
  }
}

const personOne = new User("Eu")

console.log(personOne)

// 4 - method decorator
function enumerable(value:boolean){
  return function(target:any, propertKey:string, descriptor:PropertyDescriptor){
    descriptor.enumerable = value
  }
}
class Machine {
  name

  constructor(name:string){
    this.name = name
  }

  @enumerable(false) 
  /**
   * com false quando abrimos as propriedades no console do navegador vemos que o metodo showName esta apagado
   * com true o metodo showName fica acesso
   */
  showName(){
    console.log(this)
    return `O nome da maquina é ${this.name}`
  }
}

const trator = new Machine("Trator")

console.log(trator.showName())

// 5 - acessor decorator (getter and setter)
class Monster {
  name?
  age?

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName(){
    return `O nome do monstro: ${this.name}`
  }

  @enumerable(true)
  get showAge(){
    return `A idade do monstro: ${this.age}`
  }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 6 - property decorator
// criar um decorator para formar o meu id para 00001
function formatNumber(){
  return function(target: Object, propertKey: string){
    let value:string

    const getter = function(){
      return value
    }

    const setter = function(newVal: string){
      value = newVal.padStart(5, "0")
    }

    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter
    })

  }
}
class ID {
  @formatNumber()
  id

  constructor(id:string){
    this.id = id
  }
}

const newItem = new ID("1")

console.log(newItem)