"use strict";
// 1 - arrays
var numbers = [1, 3, 8];
numbers.push(5);
console.log(numbers.toString());
var nomes = ['Valdo', 'eu', 'você'];
nomes.push("");
nomes.push("Titan");
console.log(nomes.toString());
// 2 - outra sintaxe array menos utilizada hoje em dia
var nums = [100, 200];
nums.push(300);
console.log(nums.toString());
// 3 - any
/**
 * evitar ao maximo , utilizar apenas
 *  quando por exemplo o codigo exigir que varios dados
 *  diferentes sejam utilizados
 *  na mesma variavel ou no mesmo ponto do codigo
 */
const arr1 = [1, "teste", true, [], { nome: 'valdo' }];
//aqui vemos varios tipos diferentes em um mesmo local tentar ao maximo evitar esse tipo de situação
console.log(arr1.toString());
arr1.push([1, 2, 3]);
console.log(arr1.toString());
// 4 - parametros tipados
function soma(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}
soma(2, 3);
// 5 - returno de função
function somaWithReturn(a, b) {
    let result = a + b;
    return result;
}
function greeting2(name) {
    return `olá ${name}`;
}
console.log("Soma com retorno: " + somaWithReturn(4, 6));
console.log(greeting2("Valdo"));
// 6 - funcao anonima
setTimeout(() => {
    const sallary = 1000;
    console.log(sallary);
}, 2000);
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
const objectValues = { x: 234, y: 0 };
passCoordinates(objectValues);
//outra forma de definir objetos não muito utilizada é
const pessoaObj = { nome: "valdo", sobrenome: "Neves" };
//------- fim
console.log(JSON.stringify(pessoaObj));
console.log(pessoaObj.nome);
console.log(pessoaObj.sobrenome);
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 9 - validando argumento opcional 
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Valdo"));
console.log(advancedGreeting("Titan", "Teixeira"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(1000);
showBalance("500");
// showBalance(true) // nao funciona
const arr2 = [1, 'teste'];
console.log(JSON.stringify(arr2));
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("453");
showId(321);
function showCoords(obs) {
    console.log(`X:${obs.x}; Y:${obs.y}; Z:${obs.z}`);
}
const coordObj = {
    x: 43,
    y: 3,
    z: 67
};
showCoords(coordObj);
const somePerson = { name: "Valdo", age: 34 };
console.log(somePerson);
/* nao pode ser implementado posteriormente
type personType = {
  age: number
}
*/
// 15 - literal types
let test;
test = 'testando'; // foi definido com um valor.. agora nao podemos alterar
console.log(test);
/**
 * pode ser utilizado para definir valores padroes
 * e qualquer valor fora eles irá nao sera aceito
 */
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("center");
// 16 - non null assertion operators ( ! ? ) ... tive que mudar o typescript de es2016 para es2020
const p = document.getElementById("some-p");
console.log(p.innerText); // quando sabemos que exite utilizamos exclamacao
// 17 - bigint ... tive que mudar o typescript de es2016 para es2020
let n;
// n = 1  // um valor pequeno para o bigint
n = 1000n;
console.log(n);
console.log(typeof (n));
console.log(n + 100n);
// 18 - symbol
/**
 * transforma qualquer coisa em um objeto/tipo unico
 */
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB); // saida false
console.log(symbolA === symbolB); // saida false
