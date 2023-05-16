"use strict";
function review(nota) {
    if (typeof (nota) === 'boolean') {
        return "Nenhuma nota foi enviada";
    }
    else if (typeof (nota) === 'number') {
        if (nota === 1) {
            return `A nota escolhida foi ${nota}, estamos computando a sua avaliação`;
        }
        else if (nota === 2) {
            return `A nota escolhida foi ${nota}, estamos computando a sua avaliação`;
        }
        else if (nota === 3) {
            return `A nota escolhida foi ${nota}, estamos computando a sua avaliação`;
        }
        else if (nota === 4) {
            return `A nota escolhida foi ${nota}, estamos computando a sua avaliação`;
        }
        else if (nota === 5) {
            return `A nota escolhida foi ${nota}, estamos computando a sua avaliação`;
        }
        else {
            return `A nota ${nota} não está entre 1 e 5, tente novamente`;
        }
    }
}
console.log(review(false));
console.log(review(true));
console.log(review(1));
console.log(review(2));
console.log(review(3));
console.log(review(4));
console.log(review(5));
console.log(review(6));
console.log(review(-6));
function showUserReview(review) {
    if (!review) {
        console.log("Você não avaliou o produto!");
        return;
    }
    console.log(`A nota que você deu foi: ${review}, obrigado!`);
}
showUserReview(false);
showUserReview(5);
showUserReview(2);
