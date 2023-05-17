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
// export default _notes;

//Numberd object
const _aliases = [
     ['C#','Bb'],
     ['D#','Eb'],
     ['F#','Gb'],
     ['G#','Ab'],
     ['A#','Bb']
]

Object.freeze(_aliases)
// export default _aliases;

//Numberd object
  //index = num of notes "two:"
    // two indexes []
    // root and 6
const  _intervals = {
    "third" : {
       "major": [3,5],
       "minor":[2,5]
    },
    "fourth" : {
        "major 7th":[3,5,7],
        "minor 7th":[2,5,7]
    }
}



Object.freeze(_intervals)

export default {_intervals,_aliases};

// export default {_intervals,_aliases,_notes};


/*
const _intervals = Object.freeze({
	//intervals
	one: [
		{
			interval: [2],
*/

/*
const _notes = {
	0: "C",
*/

/*Returning a note*
/*Uszes a funciotn, uses keys  and find, finally export*/

/*
function getNoteId(value) {
    return Object
        .keys(_notes)
        .find(key => _notes[key] === value);
}
module.exports = getNoteId
*/