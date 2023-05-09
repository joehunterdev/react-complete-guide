// Spread ...
// used to split array elements OR object properties
const newArray = [...oldArray,1,2]
new newObject = {...oldObject,newProp:5}

// Rest
// Used to merge a list of function arguments into an array
function sortArgs(...args){ //this will "unpack" all these arguments
    return args.sort()
}


const filter = (...args) => { 
    return args.filter(el => el === 1)
}

//Spread in action
const numbers = [1,2,3]
const newNumbers = [...numbers,4] // split into array



