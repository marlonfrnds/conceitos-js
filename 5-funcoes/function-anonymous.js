/*
    Function expression or function anonymous
        * Parâmetros
        * Argumentos - argumentos
*/

const sum = function(number1, number2) {
    return number1 + number2
}

let number1 = 10
let number2 = 12

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);