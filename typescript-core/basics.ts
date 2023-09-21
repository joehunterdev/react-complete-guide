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

//Type Alias for reuse 
type Person = {
    name: string;
    age: number;
}

hobbies = ['sports', 'cooking'];

// object type
// let person; any type can also be implicit

// let person:{
//     name: string;
//     age: number;
// }; 

// person = {
//     name: 'Joe',
//     age: 24
// }

// person = {
//     isEmployee:true //wrong type will throw error
// }

// //Define people type but as array
// let people: {
//     name: string;
//     age: number;
// }[]; //store and array of objects with these properties
// // we can get advanced by combining features/types

// let course = 'React - The Complete Guide'; // infered avoids extra code

let people: Person[]; //store and array of objects with these properties

let course: string|number = 'React - The Complete Guide'; // union type

course = 1234; // throws error


// Functions & types

// can set types for params
function add(a:number,b:number){
    return a + b; //return type is infered
}

function print(value:any){
    console.log(value); // has no return type so infered type is void
}

// Generics
// Typesafe yet flexible
// function insertAtBeggin(array:any[], value:any){ // could add num type for value but any is more flexible
//     const  newArray = [value, ...array]; // spread operator
//     return newArray;
// }

function insertAtBeggin<T>(array:T[], value:T){ // angle brackets for generics were saying that all T's are the same type on exec
    const  newArray = [value, ...array]; // spread operator
    return newArray;
}

const demoArray = [1,2,3]

const updatedArray = insertAtBeggin(demoArray, -1); // inserted at beggining -1 is infered as number

updatedArray[0].split(''); //error as split is not a number method