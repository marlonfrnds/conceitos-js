/*
    callback function
        * função que está passando como parâmetro para outra funcão 
        * chamar uma função e chama a outra função em outro momento
*/

function sayMyName(name) {
    console.log('antes de executar a função callback');

    name()

    console.log('depois de executar a callback');
}

sayMyName(
    () => {
        console.log('Estou um uma callback');
    }
)