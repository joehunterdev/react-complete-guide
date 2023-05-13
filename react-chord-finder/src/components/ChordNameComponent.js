// import _notes  from "../constants/Constants"
// import _aliases from "../constants/Constants"
// import _intervals from "../constants/Constants"
import React from "react";

const notes_indexed = [
  {
    num: 1,
    name: "C",
  },
  {
    num: 2,
    name: "C#",
  },
  {
    num: 3,
    name: "D",
  },
  {
    num: 4,
    name: "D#",
  },
  {
    num: 5,
    name: "E",
  },
  {
    num: 6,
    name: "F",
  },
  {
    num: 7,
    name: "F#",
  },
  {
    num: 8,
    name: "G",
  },
  {
    num: 91,
    name: "G#",
  },
  {
    num: 10,
    name: "A",
  },
  {
    num: 11,
    name: "A#",
  },
  {
    num: 12,
    name: "B",
  },
];
//Numberd object
const notes = [
  {
    1: "C",
    2: "C#",
    3: "D",
    4: "D#",
    5: "E",
    6: "F",
    7: "F#",
    8: "G",
    9: "G#",
    10: "A",
    11: "A#",
    12: "B",
  },
];

Object.freeze(notes);

const notes_one = {
  1: "C",
  2: "C#",
  3: "D",
  4: "D#",
  5: "E",
  6: "F",
  7: "F#",
  8: "G",
  9: "G#",
  10: "A",
  11: "A#",
  12: "B",
};
Object.freeze(notes_one);

//Numberd object
const aliases = {
  2: ["C#", "Bb"],
  4: ["D#", "Eb"],
  6: ["F#", "Gb"],
  7: ["G#", "Ab"],
  11: ["A#", "Bb"],
};

Object.freeze(aliases);

const intervals = {
  two: {
    "perfect unison": 1,
    "minor 2nd": 2,
    "major 2nd": 3,
    "minor 3rd": 4,
    "major 3rd": 5,
    "dimished/augmented": 6,
  },
  three: {
    major: [3, 5],
    minor: [2, 5],
  },
  four: {
    "major 7th": [3, 5, 7],
    "minor 7th": [2, 5, 7],
  },
};

Object.freeze(intervals);

const arr = Object.keys(notes_one);

class ChordNameComponent extends React.Component {
  constructor() {
    super();
    const input = ["C", "E", "G", "F"];
  }

  getNoteNum = (note_name) => {
    // let b = notes.reverse();

    //     let mapped = notes_one.array.map((note_name)=> {

    //       return note_name;

    //    })

    // let result = Object.keys( notes_one ).filter(obj => {
    //     return obj.val === note_name
    // })
    let note_names = ["C", "D"];
    const filtered = Object.keys(notes_one)
      .filter((key) => note_names.includes(key))
      .reduce((obj, key) => {
        obj[key] = notes_one[key];
        return obj.key;
      }, {});

    // notes_one.filter(name => name.includes('J')).map(filteredName => ())}

    //Use of object keys
    var i = 0;
    // Object.keys( notes_one ).forEach(function ( note_name, index ) {
    //     var value = notes_one[note_name];
    //     console.log(++i);
    //     console.log(note_name); // the property name
    //     console.log(value); // the value of that property
    //     console.log(index); // the counter
    //     console.log("<!--------------------->")
    // });

    // return notes_one[0].array.toString()
    // return Object.key(filter)[0]
    // notes.find(el => "C");
    return filtered;
  };

  /*this will work with one param*/
  getInterval = (note_arr) => {
    //    let args = [...note_arr,2]
    let args = [...note_arr];
    //    console.log(typeof(args))
    args.forEach((element) => {
      console.log(this.getNoteNum(element));
    });
  };

  render() {
    return (
        <div>
        {notes_indexed.filter(note => note.name.re).map(filteredNote => (
            <li>
                {filteredNote.name}
            </li>
        ))}
        </div>
    //   <div>
    //     {/* <div><p>{this.args}{this.getInterval(["C","E","G","F"])}</p></div> */}
    //     <div>
    //       <ul>s
    //         <li>Hiii</li>
    //         {/* {notes_one.array.filter(name => name.includes('C')).map(filteredName => (
    //                             <li>
    //                             {filteredName}
    //                             </li>
    //                 ))} */}
    //         {/* {Object.keys(notes_one).map(([input]) => (
    //                     <li>
    //                         {input.array.map((item) => <li>{item}</li>)}
    //                     </li>
    //                 ))} */}
    //         {arr
    //           .filter((note) => note.includes(0))
    //           .map((filteredName) => (
    //             <li>
    //               {filteredName}
    //               hii
    //             </li>
    //           ))}
    //       </ul>
    //     </div>
    //   </div>
    );
  }
}
export default ChordNameComponent;
