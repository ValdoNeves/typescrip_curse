"use strict";
// 1 - exemplor decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("iniciando decorator!");
    //esse retorno é o padrão
    return function (target, propertKey, descriptor) {
        console.log("Executando o decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    teste() {
        console.log("Terminando execução do método!");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "teste", null);
const myObj = new MyClass();
myObj.teste();
// 2 - multiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("executou a.");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("executou b.");
    };
}
class MultipleDecorators {
    // os demais decorators
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    a() // segundo
    ,
    b() // primeiro
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
// 3 - decorator de classe 
function classDecorator(constructor) {
    console.log(constructor); // pegando a class
    if (constructor.name === "User") { // nome da classe
        console.log("Criando usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const personOne = new User("Eu");
console.log(personOne);
// 4 - method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    /**
     * com false quando abrimos as propriedades no console do navegador vemos que o metodo showName esta apagado
     * com true o metodo showName fica acesso
     */
    showName() {
        console.log(this);
        return `O nome da maquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
    /**
     * com false quando abrimos as propriedades no console do navegador vemos que o metodo showName esta apagado
     * com true o metodo showName fica acesso
     */
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
// 5 - acessor decorator (getter and setter)
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// 6 - property decorator
// criar um decorator para formar o meu id para 00001
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
