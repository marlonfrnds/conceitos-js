/*
    scope var

    * var é uma variável global e local e poderá
    funcionar fora de um escopo do bloco
*/

console.log('> existe x antes do bloco? ', x); // undefined
{
    let x = 0;
}
console.log('> existe x depois do bloco? ', x); // 0