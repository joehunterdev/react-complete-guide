/**
 * Uses intervals to determin chords
 * Has note aliases
 * Globals
 * getinterval
 * getInputIntervals
 * getNote
 * getChord
 * uses an object two: [5,5] output C fifth in case to define chord type (major, minor, augmented, diminished, 7th, Triad, 9th, sus) 
 * 'Object.freeze' after its first use to ensure its immutable in your init scenario.
 * the use of _, which is frequently used to preface the name of an object's property or method that is private. 
 * Test cases
 * Docs / Diagram
 */

/*Import all as bundle*/
// import {_notes,_aliases,_intervals} from './global'

// import _notes from './global'
let chordName = ''
let names = ["zero","one","two","three","four","five"]
let input = [3,5];//third and a fifth

// switch (input) {
//     case [3,5]:
//         chordName =  "major"
//         console.log("Found `{input}`")
//         break;
//     case [2,5]:
//         chordName =  "minor"
//         break;
//     default:
//         console.log("defailt")
// }


// switch (names[inp]) {
//     case "two":

//      c
        
//     break;

//     case "three":
    
//     break;

//     default:
//         break;
// }


//Numberd object
const _notes = {
    1:'C',
    2:'C#',
    3:'D',
    4:'D#',
    5:'E',
    6:'F',
    7:'F#',
    8:'G',
    9:'G#',
    10:'A',
    11:'A#',
    12:'B'
}
Object.freeze(_notes)

//Numberd object
const _aliases = {

    2: ['C#','Bb'],
    4: ['D#','Eb'],
    6: ['F#','Gb'],
    7: ['G#','Ab'],
    11:['A#','Bb']
}

Object.freeze(_aliases)

//Numberd object
  //index = num of notes "two:"
    // two indexes []
    // root and 6

const  _intervals = {
    2 : {
       "major": [3,5],
       "minor":[2,5]
    },
    4 : {
        "major 7th":[3,5,7],
        "minor 7th":[2,5,7]
    }
}
console.log(typeof(intervals))




// const reformattedArray = intervals.map(({ key, value }) => ({ [key]: value }));

Object.freeze(_intervals)
// export default {_intervals,_aliases,_notes};
Object.keys(_intervals).forEach(function(key, index) {
    // _intervals[key] *= 2;
    console.log(key + " => " + _intervals[index]["major"])
});
  
/*this will work with one param*/

// const printMyNameArrowSingleParam = name => {
     
//     console.log(name)


// }

// This is correct
// let newArray = Array.prototype._notes.map(item => { return item})

console.log("Hi im chord " + chordName)
// let getIntervals = _intervals.map((newObj) => {    return key = value; }); 

// let getIntervals = () => {return }
console.log(newArray)