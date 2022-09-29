let length;

function shuffle(string) {
    var parts = string.split('');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join('');
}


var specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
  "\\",
];

var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseCharacters = [
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
  "w",
  "y",
  "x",
  "z",
];
var upperCaseCharacters = lowerCaseCharacters.map(function (x) {
  return x.toUpperCase();
});

function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}

const btn = document.querySelector("#generate");
btn.addEventListener("click", (event) => {
  var includedCharacters = [];
  length = parseInt(document.querySelector(`input[name=length]`).value);
  // console.log(length);
  event.preventDefault();
  const selections = getSelectedCheckboxValues("character");
  document.getElementById("password").innerHTML = "";

  let availableCharacters = [];

  if (selections.length >= 2 && length >= 8) {
    if (selections.indexOf("specialCharacters") !== -1) {
      var includedSpecialCharacterOne =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      includedCharacters.push(includedSpecialCharacterOne);
      var includedSpecialCharacterTwo =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
       includedCharacters.push(includedSpecialCharacterTwo);
      availableCharacters = availableCharacters.concat(specialCharacters);
      length = length - 2;
    }

    if (selections.indexOf("numericCharacters") !== -1) {
      var includedNumericCharacters =
        numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
      includedCharacters.push(includedNumericCharacters);
      var includedNumericCharactersTwo =
        numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
      includedCharacters.push(includedNumericCharactersTwo);
      availableCharacters = availableCharacters.concat(numericCharacters);
      length = length - 2;
    }

    if (selections.indexOf("lowerCaseCharacters") !== -1) {
      var includedLowerCaseCharacters =
        lowerCaseCharacters[
          Math.floor(Math.random() * lowerCaseCharacters.length)
        ];
      includedCharacters.push(includedLowerCaseCharacters);
        var includedLowerCaseCharactersTwo =
        lowerCaseCharacters[
          Math.floor(Math.random() * lowerCaseCharacters.length)
        ];
      includedCharacters.push(includedLowerCaseCharactersTwo);
      availableCharacters = availableCharacters.concat(lowerCaseCharacters);
      length = length - 2;
    }
    if (selections.indexOf("upperCaseCharacters") !== -1) {
      var includedUpperCaseCharacters =
        upperCaseCharacters[
          Math.floor(Math.random() * upperCaseCharacters.length)
        ];
      includedCharacters.push(includedUpperCaseCharacters);
       var includedUpperCaseCharactersTwo =
        upperCaseCharacters[
          Math.floor(Math.random() * upperCaseCharacters.length)
        ];
      includedCharacters.push(includedUpperCaseCharactersTwo);
      availableCharacters = availableCharacters.concat(upperCaseCharacters);
      length = length - 2;
    }

    console.log(includedCharacters);
    console.log(length);
    console.log(availableCharacters);

    let extraCharacters = [];

    for (let index = 0; index < length; index++) {
      const element =
        availableCharacters[
          Math.floor(Math.random() * availableCharacters.length)
        ];

      extraCharacters.push(element);
    }

    console.log(extraCharacters);

    let password = includedCharacters.concat(extraCharacters).join("");
    console.log(password);
    
    let shuffledPassword = shuffle(password);
    
    console.log(shuffledPassword)

    document.getElementById("password").innerHTML = shuffledPassword;
    
  }
});

var copy = document.getElementById("copy");

copy.addEventListener("click", function (event) {
  event.preventDefault();
  var copyText = document.getElementById("password");
  console.log(copyText.value);
  copyText.select();
  document.execCommand("copy");
  alert("Copied the password: " + copyText.value);
});
