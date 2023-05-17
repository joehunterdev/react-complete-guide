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