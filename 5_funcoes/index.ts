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