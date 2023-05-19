//1 - importação de arquivos
import importGreet from "./greet";

importGreet();

// 2 - importe variaveis
import { x } from './variable' // essa estrutura é conhecida como destructurin

console.log(x)

// 3 - multiplas importações
import {a, b, myFunction} from './multiple'

console.log(a)
console.log(b)

myFunction()

// 4 - alias
import { someName as name} from "./changeName";
console.log(name)

// 5 - import all
import * as myNumbers from './numbers'
console.log(myNumbers)

const nX = myNumbers.n1
console.log(nX)

myNumbers.teste()

// 6 - importando tipos

import { Human } from "./myType";

class User implements Human{
  name
  age

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }
}

const joao = new User("João", 23);

console.log(joao)
console.log(joao.name)
console.log(joao.age)
