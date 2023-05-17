// import _notes  from "../constants/Constants"
// import _aliases from "../constants/Constants"
// import _intervals from "../constants/Constants"
import React from "react";

//Numberd object
//Might be worth saving debt by using enums or straight up array cannot see the benefit of this
const notes = Object.freeze(
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
    12: "B"
})

//Numberd object
const aliases = {
  2: ["C#", "Bb"],
  4: ["D#", "Eb"],
  6: ["F#", "Gb"],
  7: ["G#", "Ab"],
  11: ["A#", "Bb"],
};

Object.freeze(aliases);
//root is omited
const intervals = {
  two: {
    "perfect unison": 1,
    "minor 2nd": 2,
    "major 2nd": 3,
    "minor 3rd": 4,
    "major 3rd": 5,
    "dimished/augmented": 6,
    "perfect 5th": 7,

  },
  triad: {
    "major": [3, 5],
    "minor": [2, 5],
  },
  tetrad: {
    "major 7th": [3, 5, 7],
    "minor 7th": [2, 5, 7],
  },
};

Object.freeze(intervals);


class ChordNameComponent extends React.Component {
  // constructor() {
  //   super();
  //   // const input = ["C", "E"];
  // }

  getNoteNum = (note_name) => {
     let res =  Object.keys(notes).find(key => notes[key] === note_name); //indexOf ?
    //console.log(typeof(res));
     return res; // return as object ?
  };

  //Get interval between two notes
  getInterval(input){
    // let difference = Number
    // difference = 
    // let second = this.getNoteNum(input[1]);
    // return parseInt()
    // console.log("typ in funk " + typeof(Math.abs(root - second)))
    let root =     this.getNoteNum(String(input[0]));
    let second =   this.getNoteNum(String(input[1]));
    return Math.abs(root - second);

  }

  //Get chord name from a bunch of notes
  getChord(input){
    
    // let input_intervals = [];
    let res =  [];

    //switch between lenht
    switch (input.length) {


      case 2:

        res = Object.keys(intervals.two).find(key => intervals.two[key] ===  this.getInterval([input[0],input[1]]))

        console.log("type of interval: "+ typeof(this.getInterval(input[0],input[1])))
        console.log("interval num: " + this.getInterval(input[0],input[1]))
        console.log("type of 2" + typeof(2))

        console.log(typeof(intervals.two["major 2nd"]))
        console.log(res)

        return res;

      case 3:
        // //Triad: will compose of two intervals  
        //   //get from note 1 to note 2, note 2 to note 3 
        // // let input_intervals = []
        // input_intervals =  [this.getInterval(input[0],input[1]),this.getInterval(input[1],input[2])]
        
        // console.log("type of getInterval: " + typeof(this.getInterval(input[0],input[1])))
        // console.log("input intervalType: " + typeof(input_intervals))  
        // console.log("input: " + input_intervals.one)  

        // // const intersection = Object.keys(intervals.triad).filter(element => input_intervals.includes(element));
        // res = Object.keys(intervals.triad);//.filter(element => element === "triad");
        // let chord_name = res.find(key => res[key] === input_intervals)
        // //get keys by value

        // console.log("res using intersection:" + chord_name)

        // //split + pop (new_array length of 2)

        // // let res =  Object.keys(intervals.triad).find(key => notes[key] === note_name); //indexOf ?

        break;

       case 4:
       break;

      default:
        break;
    }

  }

  render() {
    return (
      <div>
        <ul>
          <li>Root: {this.getNoteNum('C')}</li>
          <li>1st Interval :{this.getInterval(['C','D'])}</li>
          <li>Chord Name: {this.getChord(['C','D'])}</li>
         </ul>
      </div>
    );
  }
}
export default ChordNameComponent;
