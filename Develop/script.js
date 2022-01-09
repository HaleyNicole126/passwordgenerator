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



// password generated that matches selected criteria




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


