function Person(data) {
  this.characters = [
    "_",
    "!",
    "&",
    "(",
    ")",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "w",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "W",
    "Z",
  ];
  Object.keys(data).forEach((d) => {
    this[d] = data[d];
  });
}

Person.prototype = {
  isAbleTo: function () {
    return this.age >= 18;
  },

  randomKeys: function (a) {
    const rand = "" + Math.round(Math.random() * 999999);
    return rand.padStart(6, "0");
  },

  generateHash: function () {
    let hash = "";
    for (let i = 0; i < 8; i++) {
      let index = Math.trunc(Math.random() * this.characters.length);
      hash += this.characters[index];
    }
    return hash;
  },
};

export default Person;
