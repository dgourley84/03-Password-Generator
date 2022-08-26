// input variables
var enter;
var inputNumber;
var inputCharacter;
var inputUpper
var inputLower

// Special characters listing
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Number values 
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// lowercase letters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase conversion
space =[];
//covert lower case to upercase
var toUpper = function (x) {
  return x.toUpperCase();
}
// variable for uppercase
lettersUpper = letters.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//Start function to generate
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password to be?\nChoose between 8 and 128"));
  if(!enter){
    alert("Number of characters needed");
  } else if (enter < 8 || enter > 128){
    enter = parseInt(prompt("Must be between 8 and 128 characters!"));
  } else {
    inputNumber = confirm("Are numbers required?");
    inputCharacter = confirm("Are special characters required?");
    inputLower = confirm("Are lowercase letters required?");
    inputUpper = confirm("Are uppercase letters required?");
  };
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
