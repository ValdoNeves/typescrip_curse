// 1 - classes 
/**
 * classes não podem ser intanciadas com parametros sem valor
 * para isso devemos indicar que o valor irá ser inserido futuramente
 * fazemos isso com o sinal de exclamação !
 */
class User { 
  // name: string // erro
  name!: string // ok
  age!:string
}

const eu = new User()

console.log(eu) // exibe uma estrutura como um tipo de objeto pois não temos dados

eu.name = "valdo"

console.log(eu) // agora exibe um objeto e dentro dele uma chava 'name' com um valor

// 2 - constructor
class NewUser{
  name
  age

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }
}

const joao = new NewUser("João", 23);

console.log(joao)

// 3 - campo readonly

class Car {
  name
  readonly wheels = 4

  constructor(name:string){
    this.name = name
  }
}

const fusca = new Car("Fusca");
console.log(fusca) // posso verificar a qtd de rodas pois o valor ja foi definido

// 4 - herança e super
class Machine {
  name

  constructor(name:string){
    this.name = name
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
  guns

  constructor(name:string, guns:number){
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine("Destroyer", 5)

console.log(trator)
console.log(destroyer)

// 5 - metodos 
class Dwarf{
  name

  constructor(name:string){
    this.name = name
  }

  greeting(){
    console.log("Hey stranger!")
  }
}

const jimmy = new Dwarf("jimmy")

console.log(jimmy.name)
jimmy.greeting()

// 6 - this
class Truck {
  name
  hp

  constructor(name:string,hp:number){
    this.name = name
    this.hp = hp
  }

  showDetails(){
    console.log(`O caminhão é do modelo ${this.name}, e tem ${this.hp} cavalos de potência.`)
  }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - getters
class Person{
  name
  surname

  constructor(name:string,surname:string){
    this.name = name
    this.surname = surname
  }

  get fullname(){
    return this.name + " " + this.surname
  }
}

const jaoasilva = new Person("João", "Silva")

console.log(jaoasilva.name)
console.log(jaoasilva.fullname)

// 7 - setter 
class Coords {
  x!:number
  y!:number

  set fillX(x:number){
    if(x < 0){
      console.log("X não foi inserido");
      return
    }

    this.x = x
    console.log("X inserido com sucesso");
  }
  set fillY(y:number){
    if(y < 0){
      console.log("Y não foi inserido");
      return
    }

    this.y = y
    console.log("Y inserido com sucesso");
  }

  get getCoords(){
    if(this.x > 0 && this.y > 0){
      return `X: ${this.x} e Y: ${this.y}`
    }
    else if(this.y){
      return `X: não preenchido e Y: ${this.y}`
    }else{
      return `X: ${this.x} e Y: não preenchido`
    }
  }
}

const myCoords = new Coords()

myCoords.fillX = 4
myCoords.fillY = -4

console.log(myCoords)

console.log(myCoords.getCoords)

// 9 - implements
interface ShowTitle {
  itemTitle():string
}

class BlogPost implements ShowTitle{
  title

  constructor(title: string){
    this.title = title
  }

  itemTitle(): string {
    return `O titulo do post é ${this.title}`
  }
}

const myPost = new BlogPost('Hello World')

console.log(myPost.itemTitle())

class TestingInterface implements ShowTitle{
  title

  constructor(title:string){
    this.title = title
  }

  itemTitle(): string {
    return `O titulo do teste foi ${this.title}`
  }
}

const myTesting = new TestingInterface('Novo Teste')

console.log(myTesting.itemTitle())

// 10 - override de métodos 
class Base{
  someMethod(){
    console.log("Alguma coisa")
  }
}
class Nova extends Base{
  someMethod(): void {
    console.log("Testando outra coisa")
  }
}

const myObject = new Nova()

myObject.someMethod()

// 11 - public
class C {
  public x = 10
}

class D extends C {}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)

// 12 - protected
class E {
  protected x = 11

  protected protectedMethod(){
    console.log("Esse metodo é protegido")
  }
}

class F extends E {
  get showX(){
    return "X: " + this.x
  }

  showProtectedMethod(){ // unica forma de acessar o metodo protegido
    this.protectedMethod()
  }
}

const fInstance = new F()

console.log(fInstance.showX)
fInstance.showProtectedMethod()

// 13 - private
class PrivateClass {
  private name = "Nome Privado"
  
  get showName(){
    return this.name
  }

  private metodoPrivado(){
    console.log("metodo privado")
  }

  showMetodoPrivado(){
    this.metodoPrivado()
  }
}

const pObj = new PrivateClass()
console.log(pObj.showName)
// pObj.metodoPrivado() // não funciona por ser privado
pObj.showMetodoPrivado()

// console.log(pObj.name) // não funciona