/*
    FALSY

    Quando um valor é considerado false em contextos onde
    um boolean é obrigatório (condicionais e loops)

    false, 0, -0, "", null, undefined, NaN

    TRUTHT

    Quando um valor é considerado true em cotnextos onde
    um boolean é obrigatório (condicionais e loops)

    true, {}, [], 1, 3.21, "0", "false", -1, Infinity, -Infinity
*/
console.log( 0 ? 'verdadeiro' : 'falso');

console.log( {} ? 'verdadeiro' : 'falso');