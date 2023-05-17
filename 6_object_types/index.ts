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