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
  selction = selction + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

let password = "";

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
