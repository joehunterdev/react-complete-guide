// Primatives: number,string, boolean, null, undefined, symbol
// More complex types: arrays, objects
// Function types, parameters

// Primatives

let age: number = 24; // lowercase number is a type

age = 12;

let userNamae = 'Joe'

let isInstructor: boolean;

isInstructor = true;

//let hobbies: null; // not very usefull as cant be changed

let hobbies: string[]; // array type

hobbies = ['sports', 'cooking'];

// object type
// let person; any type can also be implicit

let person:{
    name: string;
    age: number;
}; 

person = {
    name: 'Joe',
    age: 24
}

// person = {
//     isEmployee:true //wrong type will throw error
// }

//Define people type but as array
let people: {
    name: string;
    age: number;
}[]; //store and array of objects with these properties

// we can get advanced by combining features/types
