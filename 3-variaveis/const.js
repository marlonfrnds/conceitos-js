/*
    scope const

    * const é uma variável local, só funciona no escopo
    onde foi criada e seu valor não pode ser alterado
*/

const y = 1;

{
    const y = 2;
    console.log('> existe y ', y);
}

console.log('> existe y depois do bloco? ', y);