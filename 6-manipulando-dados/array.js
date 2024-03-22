/*
    Manipulando Arrays

        1. adicionar no começo
        2. remover do começo
        3. adiciona no fim
        4. remover do fim
        5. pegar somente alguns elementos do array
        6. remover 1 ou mais items em qualquer posição do array
        7. encontrar a posição de um elemento do array
*/

let techs = ['html', 'css', 'js']

techs.unshift('sql')
techs.shift()
techs.push('nodejs')
techs.pop()
techs.slice(1, 3);
techs.splice(1, 2)

let index = techs.indexOf('css')
console.log(techs)