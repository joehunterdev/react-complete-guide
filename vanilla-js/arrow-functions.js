

function printMyName(myName){
    console.log(myName)
}

/*Arrow Functions*/

/*Solves alot issues with this keyword*/

/*this will always keep its context*/
const printMyName2 = (name) => {
     
     console.log(name)

}

/*this will work with one param*/
const printMyNameArrowSingleParam = name => {
     
    console.log(name)

}

/*this will work with one param*/
const printMyNameArrowMultipleParam = (name,age) => {
     
    console.log(name,age)

}

/*if all you have to do is return a single value, need to omit return keywrod*/
const simplerFunctionBody = (mumber) =>  number * 2 