/*
    5. Declare uma variável do tipo array, de nome students e atribua
    a ela nenhum valor, ou seja, somente o array vazio

    6. Reatribua valor para variável, colocando dentro dela o objeto students da questão 4
    (usar o objeto criado e inserir ele no array)

    7. Coloque no console o valor da posição zero do array

    8. Crie um novo student e coloque na posição 1 do array students

    9. Sem rodar o código, responda qual é a resposta do código abaixo e
    por que? após sua resposta, rode código e veja se você acertou

    console.log(a)
    var a = 1
*/

let students = []

let student = {
    name: 'John Doe',
    age: 22,
    weight: 54.5,
}

students = [
    student
]

const john = {
    name: 'john',
    age: 21,
    weight: 60.5,
    isSubscribed: true
}

students[1] = john

console.log(students);