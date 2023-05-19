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
    myDecorator() // aparece esse erro mas compila ate a metade
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
