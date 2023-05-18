"use strict";
// 1 - classes 
/**
 * classes não podem ser intanciadas com parametros sem valor
 * para isso devemos indicar que o valor irá ser inserido futuramente
 * fazemos isso com o sinal de exclamação !
 */
class User {
}
const eu = new User();
console.log(eu); // exibe uma estrutura como um tipo de objeto pois não temos dados
eu.name = "valdo";
console.log(eu); // agora exibe um objeto e dentro dele uma chava 'name' com um valor
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 23);
console.log(joao);
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca); // posso verificar a qtd de rodas pois o valor ja foi definido
