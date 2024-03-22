/*
    Throw e try catch

    Tentar executar um bloco de código (try)
    e se disparar algum erro (throw)
    pode-se capturar esse erro (catch)
*/

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é necessário')
    }

    console.log(name);
}

try {
    sayMyName('John Doe')
} catch (e) {
    console.log(e);
}

console.log('Após o try/catch');