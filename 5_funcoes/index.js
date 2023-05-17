"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno");
}
withoutReturn();
// 2 - callback como argumentos
function greeting(name) {
    return `Olá ${name}`;
}
/**
 * recebe uma função e os valores que essa função irá receber, dentro
 * do callback podemos preparar os dados e caso tudo esteja correto
 * enviamos o valor trataro para a função em questao nesse caso a "greeting"
 *
 * @param f
 * @param userName
 */
// recebe uma funcao e essa funcao retorna uma string, que tem um parametro 'userName'
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Valdo");
