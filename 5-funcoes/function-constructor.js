/*
    function() constructor
        * expressão new
        * criar novo objeto
        * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const john = new Person('John Doe')

console.log(john);
console.log(john.walk());