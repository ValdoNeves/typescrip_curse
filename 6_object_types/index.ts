// 1 - tipo de objeto para funcao com interface

interface Product {
  name:string
  price:number
  isAvailable: boolean
}

/**
 * o padrão é utilizar a função dessa forma
 * 
 * function showProductDetails(name:string, price:number, isAvailable:boolean){
 * }
 * mas a melhor forma é a seguinte
 * 
 */

function showProductDetails(product: Product){
  console.log(`O nome do produto é ${product.name} e seu preço é de R$${product.price}`)
  if(product.isAvailable){
    console.log("O produto esta disponivel")
  }else{
    console.log("O produto não esta disponivel")
  }
}
//posso tipar o produto pela interface, assim ficamos com os parametros padronizados
const shirt:Product = {
  name: "Camisa",
  price: 49.99,
  isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name:"Calça", price: 30, isAvailable: false})

// 2 - propriedade opcional em interface
interface User {
  email: string,
  role?: string
}

function showUserDetails(user:User){
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if(user.role){
    console.log(`A funlçao do usuário é: ${user.role}`)
  }
}

const u1:User = {email: "valdo@email.com", role: "Admin"}
const u2:User = {email: "joao@email.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car {
  brand: string
  readonly wheels:number
}

const fusca:Car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca)

// fusca.wheels = 34 // não aceita

// 4 - index signature
interface CoordObject {
  [index: string] : number // o tipo da chave vai ser uma string não importa o nome desde que receba um numero
}

let coords : CoordObject = {
  x: 10
} // aceita

coords.y = 15 // aceita

// coords.b = "teste" // não aceita
coords.b = 3 // não aceita


console.log(coords)

// 5 - extending interfaces
interface Human {
  name:string
  age: number
}

interface SuperHuman extends Human{
  superpowers:string[]
}

const eu:Human = {
  name: "eu",
  age: 35
}

const goku:SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["kamehameha", "Genki dama"]
}
console.log(eu)
console.log(goku)
console.log(goku.superpowers[1])

// 6 - intersection types
interface Character {
  name: string
}

interface Gun {
  type:string
  calibre:number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "shotgun",
  calibre: 12
}

console.log(arnold)
console.log(arnold.calibre)
