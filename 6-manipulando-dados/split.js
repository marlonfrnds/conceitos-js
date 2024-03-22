/*
    Manipulando Strings e arrays

    Separar um texto que contém espaços, em um novo array
    onde cada texto é uma posição do array. Depois disso,
    o array em um texto e onde eram espaços, coloque _
*/

let text = 'Eu quero viver o novo amor!'
let myArray = text.split(' ')

let textWithUnderscore = myArray.join('_')

console.log(textWithUnderscore);