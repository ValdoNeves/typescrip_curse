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