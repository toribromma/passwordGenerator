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

var length = 8;
var includedCharacters = [];
var availableCharacters = [];

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
  event.preventDefault();
  const selections = getSelectedCheckboxValues("character");

  console.log(selections);

  if (selections.indexOf("specialCharacters") !== -1) {
    var includedSpecialCharacter =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    includedCharacters.push(includedSpecialCharacter);
    availableCharacters = availableCharacters.concat(specialCharacters)
    length--;
  }

  if (selections.indexOf("numericCharacters") !== -1) {
    var includedNumericCharacters =
      numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    includedCharacters.push(includedNumericCharacters);
    availableCharacters = availableCharacters.concat(numericCharacters)
    length--;
  }

  if (selections.indexOf("lowerCaseCharacters") !== -1) {
    var includedLowerCaseCharacters =
      lowerCaseCharacters[
        Math.floor(Math.random() * lowerCaseCharacters.length)
      ];
    includedCharacters.push(includedLowerCaseCharacters);
    availableCharacters = availableCharacters.concat(lowerCaseCharacters)

    length--;
  }
  if (selections.indexOf("upperCaseCharacters") !== -1) {
    var includedUpperCaseCharacters =
      upperCaseCharacters[
        Math.floor(Math.random() * upperCaseCharacters.length)
      ];
    includedCharacters.push(includedUpperCaseCharacters);
    availableCharacters = availableCharacters.concat(upperCaseCharacters)

    length--;
  }

  console.log(includedCharacters);
  console.log(length);
  console.log(availableCharacters);
});
