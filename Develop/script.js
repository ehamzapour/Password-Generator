// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "+", "?", "-"]

var lower;
var upper;
var num;
var symb;

function generatePassword() {
  var passLength = window.prompt("Choose a number between 8-128 to generate a password.");
  if(passLength > 128){
    window.alert("Please choose a number less than 128.")
    generatePassword()
  }else if(passLength < 8){
    window.alert("Please choose a number more than 8.")
    generatePassword()
  }
  }

  function generatePassword() {
    var lower = confirm("Do you want to use lowercase characters?");
    if (lowercase == true) {
      lowercase = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
      passLength += lowercase.length();
    }else {
      lowercase = null;
      generatePassword()
    }
  }

  function generatePassword() {
    var upper = confirm("Do you want to use uppercase characters?");
    if (uppercase == true) {
      uppercase = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
      passLength += uppercase.length();
    }else {
      uppercase = null;
      generatePassword()
    }
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
