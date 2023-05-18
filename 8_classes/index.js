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
// 4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 5);
console.log(trator);
console.log(destroyer);
// 5 - metodos 
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey stranger!");
    }
}
const jimmy = new Dwarf("jimmy");
console.log(jimmy.name);
jimmy.greeting();
// 6 - this
class Truck {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O caminhão é do modelo ${this.name}, e tem ${this.hp} cavalos de potência.`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullname() {
        return this.name + " " + this.surname;
    }
}
const jaoasilva = new Person("João", "Silva");
console.log(jaoasilva.name);
console.log(jaoasilva.fullname);
// 7 - setter 
class Coords {
    set fillX(x) {
        if (x < 0) {
            console.log("X não foi inserido");
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y < 0) {
            console.log("Y não foi inserido");
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        if (this.x > 0 && this.y > 0) {
            return `X: ${this.x} e Y: ${this.y}`;
        }
        else if (this.y) {
            return `X: não preenchido e Y: ${this.y}`;
        }
        else {
            return `X: ${this.x} e Y: não preenchido`;
        }
    }
}
const myCoords = new Coords();
myCoords.fillX = 4;
myCoords.fillY = -4;
console.log(myCoords);
console.log(myCoords.getCoords);
