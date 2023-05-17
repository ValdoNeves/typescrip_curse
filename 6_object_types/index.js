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
