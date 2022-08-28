// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  passwordLength = Number(prompt("How many characters would you like your password to be?\nChoose between 8 and 128"));

  if(isNaN(passwordLength)) {
    alert("Please enter number")
    return;
}
  if (passwordLength < 8 || passwordLength > 128){
    passwordLength = parseInt(prompt("Must be between 8 and 128 characters!"));
    return;
  } 
    
  const inputNumber = confirm("Are numbers required?");
  const inputCharacter = confirm("Are special characters required?");
  const inputLower = confirm("Are lowercase letters required?");
  const inputUpper = confirm("Are uppercase letters required?");
  
  if(!inputCharacter && !inputLower && !inputUpper && !inputNumber) {
    alert("Please select one input criteria");
    return;
  } 

let selction = "";
console.log (passwordLength);

// create secltions based on the criteria
if(inputUpper){
  selction = selction + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if(inputLower) {
  selction = selction + "abcdefghijklmnopqrstuvwxyz";
}

if(inputNumber) {
  selction = selction + "1234567890";
}

if(inputCharacter) { 
  selction = selction + "!@#$%^&*()";
}

let password = "";

for (let i = 0; i < passwordLength; i++){
  const randomSelection = selction[ Math.floor (Math.random() * selction.length)] 
  password = password + randomSelection;
}

return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
