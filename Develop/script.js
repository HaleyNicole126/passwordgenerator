// Assignment code here


var passwordLength = function() {
  var promptLength = parseInt(window.prompt("Please enter desired password length between 8 and 128 characters."))
  if (isNaN(promptLength) || promptLength < 8 || promptLength > 128) {
    window.alert("Invalid Response");
    return passwordLength();
  } else {
    window.alert("You have a requested a password " + promptLength + " characters long.");
    return promptLength;
  }
};



var passwordLower = function() {
  var promptLower = window.confirm("Do you want lowercase letters in your password?")
  return promptLower;

};

var passwordUpper = function() {
  var promptUpper = window.confirm("Do you want uppercase letters in your password?")
  return promptUpper;

};

var passwordNumber = function() {
  var promptNum = window.confirm("Do you want numeric characters in your password?")
  return promptNum;

};

var passwordSpecial = function() {
  var promptSpecial = window.confirm("Do you want special characters in your password?")
  return promptSpecial;

};

var passInfo = {
  length: passwordLength(),
  lower: passwordLower(),
  upper: passwordUpper(),
  num:  passwordNumber(),
  special: passwordSpecial(),
};

// Is at least one character type selected?

if (passInfo.lower === false) {
  console.log("no lowercase");
}
if (passInfo.upper === false) {
  console.log("no uppercase");
}
if (passInfo.num === false) {
  console.log("no numbers");
}
if (passInfo.special === false) {
  console.log("no special");
  
}
if (passInfo.special === false && passInfo.num === false && passInfo.upper === false && passInfo.lower === false) {
  window.alert("Please select at least one character type");
  location.reload();

}

var characterArray = [];

 var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(alphaLower);

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(alphaUpper);

var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(numChar);

var specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "`", "{", "|", "}", "~"];
console.log(specialChar);

if (passInfo.lower === true) {
  var lower = alphaLower.join("");
  characterArray.push(lower);
}

if (passInfo.upper === true) {
  var upper = alphaUpper.join("");
  characterArray.push(upper);
}

if (passInfo.num === true) {
   var num = numChar.join("");
  characterArray.push(num);
}

if (passInfo.special === true) {
  var spec = specialChar.join("");
  characterArray.push(spec);
}

var newArray = characterArray.join("");



var passArray = [];
for(var i = 0; i < passInfo.length; i++) {
  var ranElement = Math.floor(Math.random() * newArray.length);
  passArray.push(newArray[ranElement]);
  console.log(passArray);
}

function generatePassword() {
  let text = passArray.join("");
  return text;
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


