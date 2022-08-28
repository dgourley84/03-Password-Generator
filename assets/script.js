//Global constants and variables

const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const specialChar = " \"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  passwordLength = parseInt(prompt("How many characters would you like your password to be?\nChoose between 8 and 128"));

  if(isNaN(passwordLength)) {
    alert("Please enter number")
    return;
}
  if (passwordLength < 8 || passwordLength > 128){
    passwordLength = parseInt(prompt("Must be between 8 and 128 characters!"));
    return;
  } 
    
  var inputNumber = confirm("Are numbers required?");
  var inputCharacter = confirm("Are special characters required?");
  var inputLower = confirm("Are lowercase letters required?");
  var inputUpper = confirm("Are uppercase letters required?");
  
  if(!inputCharacter && !inputLower && !inputUpper && !inputNumber) {
    alert("Please select one input criteria");
    return;
  } 

var selction = "";

console.log (passwordLength);

let password = "";

// create secltions based on the criteria 
if(inputUpper){
  selction = selction + uppercaseChar;
  // randomly select a value from letters
  let fixedUpper = uppercaseChar[Math.floor (Math.random() * uppercaseChar.length)]; 
  // this value will be added to password
  password = password + fixedUpper;
  // reduce the password lenght by one
  passwordLength--;
}

if(inputLower) {
  selction = selction + lowercaseChar;
  // randomly select a value from  lower case letters
  let fixedLower = lowercaseChar[Math.floor (Math.random() * lowercaseChar.length)]; 
  // this value will be added to password
  password = password + fixedLower;
  // reduce the password lenght by one
  passwordLength--;
}

if(inputNumber) {
  selction = selction + number;
  // randomly select a value from numbers
  let fixedNumber = number[Math.floor (Math.random() * number.length)]; 
  // this value will be added to password
  password = password + fixedNumber;
  // reduce the password lenght by one
  passwordLength--;
}


if(inputCharacter) { 
  selction = selction + specialChar;
  // randomly select a value from characters
  let fixedspecialChar = specialChar[Math.floor (Math.random() * specialChar.length)]; 
  // this value will be added to password
  password = password + fixedspecialChar;
  // reduce the password lenght by one
  passwordLength--;
}

for (var i = 0; i < passwordLength; i++){
  var randomSelection = selction[Math.floor (Math.random() * selction.length)] 
  password = password + randomSelection;
}

return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//check the password contains all elements or elements request

// if uppercase is selected ensure password output has an uppercase

// loop over the password one character at a time and check whether one value 