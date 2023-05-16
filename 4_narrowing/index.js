"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof (a) === 'string' && typeof (b) === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof (a) === 'number' && typeof (b) === 'number') {
        console.log(a + b);
    }
    else {
        console.log("Error");
    }
}
sum("1.3", "2.0");
sum(3, 2);
sum(3, "2");
// 2 - checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const mult = arr.reduce((i, total) => i * total);
            console.log(mult);
        }
    }
    else {
        console.log("Defina uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], 'sum');
operations([2, 2, 3], 'multiply');
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof (SuperUser)) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof (User)) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const titan = new Dog("Titan", "pugdog");
const custelinha = new Dog("custelinha");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O ${dog.name} é da raça ${dog.breed}`);
    }
    else {
        console.log("não tem raça definida");
    }
}
showDogDetails(titan);
showDogDetails(custelinha);
