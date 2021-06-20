
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
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];
var upperCaseCharacters = lowerCaseCharacters.map(function(x){ return x.toUpperCase(); })
console.log(upperCaseCharacters)
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
    console.log("in the list");
  } else {
    console.log("not in the list");
  }

  if (selections.indexOf("numericCharacters") !== -1) {
    console.log("in the list");
  } else {
    console.log("not in the list");
  }

  if (selections.indexOf("lowerCaseCharacters") !== -1) {
    console.log("in the list");
  } else {
    console.log("not in the list");
  }

  if (selections.indexOf("upperCaseCharacters") !== -1) {
    console.log("in the list");
  } else {
    console.log("not in the list");
  }
});
