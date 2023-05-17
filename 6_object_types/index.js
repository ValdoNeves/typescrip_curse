"use strict";
// 1 - tipo de objeto para funcao com interface
/**
 * o padrão é utilizar a função dessa forma
 *
 * function showProductDetails(name:string, price:number, isAvailable:boolean){
 * }
 * mas a melhor forma é a seguinte
 *
 */
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é de R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto esta disponivel");
    }
    else {
        console.log("O produto não esta disponivel");
    }
}
//posso tipar o produto pela interface, assim ficamos com os parametros padronizados
const shirt = {
    name: "Camisa",
    price: 49.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Calça", price: 30, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A funlçao do usuário é: ${user.role}`);
    }
}
const u1 = { email: "valdo@email.com", role: "Admin" };
const u2 = { email: "joao@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
}; // aceita
coords.y = 15; // aceita
// coords.b = "teste" // não aceita
coords.b = 3; // não aceita
console.log(coords);
const eu = {
    name: "eu",
    age: 35
};
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["kamehameha", "Genki dama"]
};
console.log(eu);
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "shotgun",
    calibre: 12
};
console.log(arnold);
console.log(arnold.calibre);
// 7 - readonly array
let myArray = ["Eu", "tu", "eles"];
myArray[3] = "elas";
console.log(myArray);
let myArray2 = ["teste1", "teste2"];
// myArray2[2] = "novoTeste" // não é possivel
console.log(myArray2[0]);
console.log(myArray2[1]);
/**
 * as modificações não podem ser feitas diretamente.. apenas por metodos
 */
//iteração com os valores de cada item
myArray2.forEach((item) => {
    console.log(`Valor: ${item}`);
});
// pode ser alterado dessa forma
myArray2 = myArray2.map((item) => {
    return `valor: ${item}`;
});
console.log(myArray2);
const myNumberArray = [1, 2, 34, 5, 6];
const anotherUser = ["Eu", 34];
console.log(anotherUser[0]);
anotherUser[0] = "Valdo";
console.log(anotherUser[0]);
console.log(anotherUser[1]);
