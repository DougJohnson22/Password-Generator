var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var finalPassArray = ""
var finalPass = ""
var CapLetterArray = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var LowLetterArray = ("abcdefghijklmnopqrstuvwxyz")
var NumArray = ("1234567890")
var SpecArray = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

//Create a "generate password" function and write all the logic within this function

function generatePassword() {

  //Create promt to ask user how many char they like they pass to be ( at least 8 characters and no more than 128) and set to a variable

  var passLen = prompt("How many characters would you like your password to be? Must be between 8 and 128 characters.");
  if (isNaN(passLen) || passLen < 8 || passLen > 128) {
    alert("Please enter a valid length.")
    var passLen = prompt("How many characters would you like your password to be? Must be between 8 and 128 characters.")
  }


  // Create confirm to ask user if they want capital letters and set to a variable
  var CapLetters = confirm("Would you like capitial letters in your Password?");
  if (CapLetters === true) {

    finalPassArray = finalPassArray + CapLetterArray;
  }


  // Create confirm to ask user if they want lowercase letters and set to a variable
  var LowLetters = confirm("Would you like lower case letters in your Password?");
  if (LowLetters === true) {

    finalPassArray = finalPassArray + LowLetterArray;
  }


  // Create confirm to ask user if they want numbers and set to a variable
  var Numbers = confirm("Would you like numbers in your Password?");
  if (Numbers === true) {

    finalPassArray = finalPassArray + NumArray;
  }

  // Create confirm to ask user if they want Special char and set to a variable
  var Special = confirm("Would you like special characters in your Password?");
  if (Special === true) {

    finalPassArray = finalPassArray + SpecArray;
  }


  // Create a conditional to make sure tha the user has chosen at leat one type of char

  if (CapLetters === false && LowLetters === false && Numbers === false && Special === false) {
    alert("Please choose one type of character for your array")
    generatePassword()
  }


  console.log(passLen)
  console.log(finalPassArray)

  // Create For loop to generate final password with user decisions
  for (var i = 0; i < passLen; i++) {
    var randomNum = Math.floor(Math.random() * finalPassArray.length);
    (finalPass += finalPassArray[randomNum])
  }

  // Push Final Password!
  return finalPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
