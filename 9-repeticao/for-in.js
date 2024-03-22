/*
    for...in
*/

let person = {
    name: 'John Doe',
    age: 22,
    weight: 54.5
}

for (let property in person) {
    console.log(property);
    console.log(person[property]);
}