//Primitive types
const number = 1
const num2 = number // creates a copy of value

//objects and arrays are references types

const person = {
    myName :'Joe'
}

const secondPerson = person;

person.name = "Mikies"  // this will not change as the pointer / ref is being used

console.log(secondPerson)

