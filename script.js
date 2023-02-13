// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+", "?", "-"]
var passwordChar = [];

var lower;
var upper;
var numb;
var symb;

// Prompt message for user to choose password length.
function generatePassword() {
  var passLength = window.prompt("Choose a number between 8-128 to generate a password.");
  if (passLength > 128) {
    window.alert("Please choose a number less than 128.");
    generatePassword()
  } else if (passLength < 8) {
    window.alert("Please choose a number more than 8.");
    generatePassword()
  }

  console.log(passLength);

  // Prompt for users to include one of the following in their password
  lower = confirm("Do you want to use lowercase letters?");
  if (lower) {
    var lowercaseChar = alert("Your password will have lowercase letters.");
  }
  console.log(lower);

  upper = confirm("Do you want to use uppercase letters?");
  if (upper) {
    var uppercaseChar = alert("Your password will have uppercase letters.");
  }

  numb = confirm("Do you want to use numbers?");
  if (numb) {
    var numbChar = alert("Your password will have uppercase letters.");
  }

  symb = confirm("Do you want to use symbols?");
  if (symb) {
    var symbChar = alert("Your password will have symbols.");
  }

  if (lower === false && upper === false && numb === false && symb === false) {
    alert("You have to select one characteristic.")
    generatePassword()

  }

  // Chooses one of the approved characteristics into the generator
  if (lower) {
    passwordChar = passwordChar.concat(lowerCase);
  }
  if (upper) {
    passwordChar = passwordChar.concat(upperCase);
  }
  if (numb) {
    passwordChar = passwordChar.concat(numbers);
  }
  if (symb) {
    passwordChar = passwordChar.concat(symbols);
  }

  // this for loop runs until approved characteristics are randomly selected and generates the password
  let finalPassword = ""
  for (let i = 0; i < passLength; i++) {
    let rng = [Math.floor(Math.random() * passwordChar.length)];
    finalPassword = finalPassword + passwordChar[rng];
  }
  return finalPassword;

};

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