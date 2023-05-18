// 1 - classes 
/**
 * classes não podem ser intanciadas com parametros sem valor
 * para isso devemos indicar que o valor irá ser inserido futuramente
 * fazemos isso com o sinal de exclamação !
 */
class User { 
  // name: string // erro
  name!: string // ok
  age!:string
}

const eu = new User()

console.log(eu) // exibe uma estrutura como um tipo de objeto pois não temos dados

eu.name = "valdo"

console.log(eu) // agora exibe um objeto e dentro dele uma chava 'name' com um valor