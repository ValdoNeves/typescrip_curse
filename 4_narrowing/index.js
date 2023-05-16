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
