// 1 - number
var x: number = 10;

console.log(typeof(x));
console.log(x);

// 2 - string
var txt: string = "Valdo";

console.log(typeof(txt));
console.log(txt);

// 3 - boolean

var trueOrFalse: boolean = false;

console.log(typeof(trueOrFalse));
console.log(trueOrFalse);

trueOrFalse = true;
console.log(trueOrFalse);

// 4 - inference e annotation

const ann: string = "Teste";
var inf = "teste"; 

// ann = 1 // nao eh possivel pois esta definida com annotation de string
// inf = 1 // nao eh possivel pois na sua criação temos uma string na inferencia

console.log(`${ann} e ${inf}`);