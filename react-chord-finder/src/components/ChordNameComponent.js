// import _notes  from "../constants/Constants"
// import _aliases from "../constants/Constants"
// import _intervals from "../constants/Constants"
import React from "react";

//Numberd object
//Might be worth saving debt by using enums or straight up array cannot see the benefit of this
const notes = Object.freeze({
  0: "C",
  1: "C#",
  2: "D",
  3: "D#",
  4: "E",
  5: "F",
  6: "F#",
  7: "G",
  8: "G#",
  9: "A",
  10: "A#",
  11: "B",
});

//Numberd object
const aliases = {
  1: ["C#", "Bb"],
  2: ["D#", "Eb"],
  5: ["F#", "Gb"],
  6: ["G#", "Ab"],
  10: ["A#", "Bb"],
};

Object.freeze(aliases);

//root is omited
const intervals = {
  two: {
    "perfect unison": 0,
    "minor 2nd": 1,
    "major 2nd": 2,
    "minor 3rd": 3,
    "major 3rd": 4,
    perfect: 5,
    "dimished/augmented": 6,
    "perfect 5th": 7,
    "minor 6th": 8,
    "major 6th": 9,
  },
  triad: {
    major: [4, 7],
    minor: [3, 7]
  },
  tetrad: {
    "major 7th": [4, 7, 11],
    "minor 7th": [3, 7, 11]
  },
  five: {
    "major 7th": [4, 7, 11],
    "minor 7th": [3, 7, 11]
  },
};

Object.freeze(intervals);

class ChordNameComponent extends React.Component {
  // constructor() {
  //   super();
  // }

  //TestProps = (props) => {return props}
  getNoteNum = (note_name) => {
    let res = Object.keys(notes).find((key) => notes[key] === note_name); //indexOf ?
    return res; // return as object ?
  };

  //Get interval between two notes
  getInterval(input) {
    let root = this.getNoteNum(String(input[0]));
    let second = this.getNoteNum(String(input[1]));
    return Math.abs(root - second);
  }

  arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  //Get chord name from a bunch of notes
  getChord(input) {
    let input_intervals = [];
    let res = [];
    let chord_name = "";
    //switch between lenht
    switch (input.length) {
      case 2:
        chord_name = Object.keys(intervals.two).find(
          (key) => intervals.two[key] === this.getInterval([input[0], input[1]])
        );
        console.log(res);
        return chord_name;

      case 3:
        //Triad: will compose of two intervals
        // get from note 1 to note 2, note 1 to note 3
        input_intervals = [
          this.getInterval([input[0], input[1]]),
          this.getInterval([input[0], input[2]]),
        ];
        //  console.log("input intervals: " + input_intervals)
        res = Object.keys(intervals.triad).forEach((key, val) => {
          if (
            this.arrayEquals(intervals.triad[key], input_intervals) === true
          ) {
            chord_name = input[0] + " " + key;
          }
        });

        return chord_name;

      case 4:
        //Tetrad: will compose of two intervals
        // get from note 1 to note 2, note 1 to note 3
        input_intervals = [
          this.getInterval([input[0], input[1]]),
          this.getInterval([input[0], input[2]]),
          this.getInterval([input[0], input[3]]),
        ];
        console.log("input intervals: " + input_intervals);
        res = Object.keys(intervals.tetrad).forEach((key, val) => {
          if (
            this.arrayEquals(intervals.tetrad[key], input_intervals) === true
          ) {
            chord_name = input[0] + " " + key;
          }
        });

        return chord_name;

      case 5:
        //Tetrad: will compose of two intervals
        // get from note 1 to note 2, note 1 to note 3
        input_intervals = [
          this.getInterval([input[0], input[1]]),
          this.getInterval([input[0], input[2]]),
          this.getInterval([input[0], input[3]]),
          this.getInterval([input[0], input[4]]),
        ];
        console.log("input intervals: " + input_intervals);

        res = Object.keys(intervals.five).forEach((key, val) => {
          if (
            this.arrayEquals(intervals.tetrad[key], input_intervals) === true
          ) {
            chord_name = input[0] + " " + key;
          }
        });

        return chord_name;

        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>Root: {this.getNoteNum("C")}</li>
          <li>1st Interval: {this.getInterval(["C", "E"])}</li>
          <li>Dyad Name: {this.getChord(["C", "D#"])}</li>
          <li>Triad Name: {this.getChord(["C", "D#", "G"])}</li>
          <li>Tetrad Name: {this.getChord(["C", "D#", "G", "B"])}</li>

          {/* <li>Chord Name: {this.getChord(['C','D','G'])}</li> */}
          {/* <li><TestProps notes={['C','D','G']} /></li> */}
        </ul>
      </div>
    );
  }
}
export default ChordNameComponent;
