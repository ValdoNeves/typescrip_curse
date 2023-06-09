// 1 - Generics
function showData<T>(arg:T): string{
  return `O dado é ${arg}`
}

console.log(showData(5))
console.log(showData("Testando generic"))

// 2 - constraint em generic
function showProductName<T extends {name:string}>(obj:T){
  console.log(`O nome do protudo é ${obj.name}`)
}

const myObj = { name: "eu"}
const carObj = { name: "car", wheel: 4}

showProductName(myObj);
showProductName({name: "Valdo"});
showProductName(carObj); // continua recebendo o valor pois temos um campo name definido na estrutura

// 3 - generics com interface
interface MyObject<T,U, Q>{
  name: string
  wheels: T
  engine: U
  color: Q
}
//posso criar tipos e indicar quais são os valores que cada um dos generics vai receber
type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {name: "Fusca", wheels: 4, engine: 1.3, color:"preto"}
const myPen:Pen = {name: "Caneta", wheels: false, engine: false, color: "azul"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
/**
 * é uma forma de indicar que um parametro é a chave de outro parametro
 * ou seja passamos um objeto que tem varias chaves, e verificamos se a chave existe se existir
 * podemos passar o valor que essa chave tem.. e não podemos passar uma chave que não existe dentro do objeto
 */

function getSomeKey<T, K extends keyof T>(obj:T,key:K){
  return `A chave ${key.toString()} esta presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: "2TB",
  ram: "32GB"
}

console.log(getSomeKey(server, 'hd'))

// 5 - keyof type operator
type Character = {
  name: string;
  age: number;
  hasDriveLicense:boolean
}

type C = keyof Character

function showCharName(obj:Character,key:C){
  return(`${obj[key]}`)
}

const myChar: Character = {
  name: "Eu mesmo",
  age: 45,
  hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
// console.log(showCharName(myChar, 'teste')) // não funciona

// 6 - typeof type operator
const userName:string = "Valdo"

const userName2:typeof userName = "teste"
// const userName3:typeof userName = 34 // erro por ser um tipo string

// tambem podemos declar como um type
type novaVariavel = typeof userName
const userName4: novaVariavel = "novo Teste"

// 7 - indexed access type
type Truck = {km:number, kg:number, description:string}

type km = Truck['km']

const newTruck: Truck = {
  km: 1000,
  kg: 5000,
  description: "caminhão para pouca carga"
}

function showKm(km:km){
  console.log(`O veiculo tem a km de: ${km}`)
}

const newCar = {
  km: 500,
  kg: 1000
}

showKm(newTruck.km)
showKm(newCar.km)

// 8 - conditional types
interface A {}

interface B extends A {}

interface Teste {
  showName():string // recebe um metodo showName que retorna uma string
}

type myType = B extends A ? number: string

const someVar:myType = 5 // como B herda de A essa linha esta OK
// const someVar2:myType = "teste" // não funciona pq no if definimos que tem que ser um number

type myTypeTeste = Teste extends {showNumber():number} ? string : boolean // nesse caso o tipo será boolean
type myTypeTeste2 = Teste extends {showName():string} ? string : boolean // nesse caso o tipo será string

// 9 - template literals type
type TestA = "text"

type CustomType = `Some ${TestA}`

const testing:CustomType = 'Some text' // o valor tem que ser exatamente o descrito no CustomType OK
// const testing2:CustomType = 'text' // o valor tem que ser exatamente o descrito no CustomType erro

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` |`${a2}` // ou o texto do a1 ou do a2
