/*
    scope let

    * let é uma variável local e só funciona no escopo
    onde foi criada
*/

let y = 1;

{
    y = 0;
    console.log('> existe y ', y);
}

console.log('> existe y depois do bloco? ', y);