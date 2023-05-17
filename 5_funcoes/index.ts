// 1 - void

function withoutReturn():void{
  console.log("Esta função não tem retorno");
}

withoutReturn();

// 2 - callback como argumentos

function greeting(name:string): string{
  return `Olá ${name}`
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
function preGreeting(f: (name: string) => string, userName:string){
  console.log("Preparando a função!")

  const greet = f(userName);

  console.log(greet)
}

preGreeting(greeting, "Valdo");

// 3 - generic function

/**
 * U e T sao patrões de nomenclatura.. com eles conseguimos
 * limitar de certa forma o conteudo mesmo sendo generico 
 * */
function firstElement<T>(arr: T[]):T{
  return arr[0]
}

console.log(firstElement([1,2,3,4,5]))
console.log(firstElement([false,"2",3,true,5]))
console.log(firstElement(['teste3','teste2','teste1']))

function mergeObjects<U, T>(obj1:U, obj2:T):U & T{
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: "Valdo"},{age: 35, job: "programmer"});

console.log(newObject)

// 4 - constraint em generic function
/**
 * aceitando dois tipos
 * 
 * o T pode ser passado para mais de um valor.. ou se preferir podemos utilizar outra letra
 * 
 * function biggestNumber<T extends number | string, U extends number | string>(a: T, b:U) {
 *  return a 
 * }
 *
 * mas claramente utilizar uma letra nesse caso fica mais simples de entender
 * */


function biggestNumber<T extends number | string>(a: T, b:T):T {
  let biggest:T

  if(+a > +b){ // conversao direta para numero
    biggest = a
  }else{
    biggest = b
  }
  return biggest
}

console.log(biggestNumber(1,5))
console.log(biggestNumber("4","3"))

// 5 - especificar tipo de argumento
function mergeArray<T>(arr1:T[], arr2:T[]){
  return arr1.concat(arr2);
}

console.log(mergeArray([1,2,3],[8,7,9]))
console.log(mergeArray<number | string>([1,2,3],["a","b","c",5]))

// 6 - parametros opcionais
function modernGreeting(name:string, greet?:string):string{
  if(greet){
    return `Olá ${greet} ${name}, tudo bem?`;
  }
  return `Olá ${name}, tudo bem?`;

}

console.log(modernGreeting("Valdo"))
console.log(modernGreeting("Valdo","Sr."))

// 7 - parametro default
/**
 * A tipagem do m não precisa ser feita, adicionei apenas por testes 
 * afinal a tipagem é realizada por eferencia
 **/
function somaDefault(n:number, m:number = 10):number{
  return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(10,2))

// 8 - unknown
function doSomething(x:unknown){
  if(Array.isArray(x)){
    console.log(x[0] + " primeiro valor do Array")
  }
  // else if(Number.isFinite(x)){
  //   console.log(x + " é um numero finito")
  // }
  else if(typeof(x) === 'number'){
    console.log(x + " é um numero")
  }
}

doSomething(["teste",7,8,9]);
doSomething(1.8);
doSomething(8);

// 9 - never
/**
 * parecido com o void, mas é utilizado para 
 * indicar um erro, pois interrompe o fluxo...
 * normalmente utilizam o void
 */

function showErrorMessage(msg:string):never{
  throw new Error(msg)
}
//comentado apenas para não atrapalhar nos demais exemplos
// showErrorMessage("Erro Lançado");

// 10 - rest operator
/**
 * ele vai pegar todos os parametros e unir em uma lista.. apos isso podemos utilizar
 * o reduce é somar ou fazer o que precisamos fazer com os dados
 */
function sumAll(...n: number[]):number{
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10,1))
console.log(sumAll(0,54))
// console.log(sumAll("test")) // erro

// 11 - destructuring como parametro
function showProductDetails({name, price}:{name:string, price:number}):string{
  return `O nome do produto é ${name} e ele custa R$${price.toString().replace('.',',')}.`
}

const shirt = {name: "camisa", price: 49.99}

console.log(showProductDetails(shirt)) // ok
// console.log(showProductDetails({name: "teste", age: 23})) // error
// console.log(showProductDetails([1,2,3])) // error