// 1 - var , let e const
var x = 10
var y = 15

if (y > 10) {
  var x = 5
  console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
  let a = 5
  console.log(a)
}

console.log(a)
// 2 - arrowfunction
const user = {
  name: "Valdo",
  sayUserName() {
    var self = this
    setTimeout(function () {
      // console.log(this) // não funciona
      // console.log("user name "+ this.name) // não funciona assim

      console.log(self)
      console.log("user name " + self.name)
    }, 400)
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this)
      console.log("user Arrow function: " + this.name)

    }, 200)
  }
}

// user.sayUserName()
// user.sayUserNameArrow()

// 3 - filter

const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumber = arr.filter((n) => {
  if (n >= 3) {
    return n
  }
})

console.log(highNumber)
console.log(arr)

const users = [
  { name: "eu 1", available: true},
  { name: "eu 2", available: false},
  { name: "eu 3", available: true},
  { name: "eu 4", available: false}
]


const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

// 4 - maps

const products = [
  {name: "camisa", price: 5.99, category:'roupa'},
  {name: "chaleira eletrica", price: 45.99, category:'eletro'},
  {name: "fogão", price: 500.99, category:'eletro'},
  {name: "calça", price: 60.99, category:'roupa'},
]


products.map((product) => {
  if(product.category === "roupa"){
    product.onSale = true
  }
})

console.log(products)

// 7 - spread operator
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [0,...a1, ...a2]
console.log(a3)

const a4 = [0, ...a1, 9]
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const carInfos = {km: 100000, price: 49000}

const car = {...carName, ...carBrand, ...carInfos, wheels: 4}

console.log(car)

// 8 - class
class Product {
  constructor(name, price){
    this.name = name
    this.price = price
  }

  productWithDiscount(discount){
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Product("Camisa", 20)

console.log(shirt.name)
console.log("R$"+shirt.productWithDiscount(10) + " de desconto")
console.log("R$"+shirt.productWithDiscount(50) + " de desconto")

const tenis = new Product("Tênis", 120)

console.log("R$"+tenis.productWithDiscount(5)+ " de desconto no " + tenis.name)

// 9 - herança
class ProductWithAttributes extends Product{
  constructor(name, price, colors){
    super(name, price) // passando valores para o produto
    this.colors = colors
  }

  showColors(){
    console.log("As cores são: ")
    this.colors.forEach((color) => {
      console.log(color)
    });
  }
}

const hat = new ProductWithAttributes("Chapeu de palha", 20.99, ["Amarelo Claro", "branco"])

console.log(hat.name)
console.log(hat.price)
hat.showColors()