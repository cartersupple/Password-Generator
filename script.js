
var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var allCombos = [];


function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password. It can be as short as 8 or as long as 128")
  if (passwordLength === "") {
    alert("You didn't put anything!")
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("That's not between 8 and 128 c'mon man!")
  } else {
    var uppercaseConfirm = window.confirm("Do you want uppercase letters in your password?");
    var lowercaseConfirm = window.confirm("Do you want lowercase letters in your password?");
    var numberConfirm = window.confirm("Do you want to throw in some numbers?");
    var characterConfirm = window.confirm("How about some special characters (i.e #, &, @) to really spice it up!");

    if (!uppercaseConfirm && !lowercaseConfirm && !numberConfirm && !characterConfirm)
      choices = alert("You gotta pick at least something...");
    var passwordCharacters = [];
    allCombos = []

    var numOfChoices = 0;
    if (uppercaseConfirm){
      allCombos = allCombos.concat(uppercase);
      passwordCharacters.push(uppercase[Math.floor(Math.random() * uppercase.length)])
      numOfChoices++;
    }
    if (lowercaseConfirm){
      allCombos = allCombos.concat(lowercase);
      passwordCharacters.push(lowercase[Math.floor(Math.random() * lowercase.length)])
      numOfChoices++;
    }
    if (numberConfirm){
      allCombos = allCombos.concat(number);
      passwordCharacters.push(lowercase[Math.floor(Math.random() * number.length)])
      numOfChoices++;
    }
    if (characterConfirm){
      allCombos = allCombos.concat(character);
      passwordCharacters.push(character[Math.floor(Math.random() * character.length)])
      numOfChoices++;
    }
    for (let i = 0; i < (passwordLength-numOfChoices); i++) {
      passwordCharacters.push(allCombos[Math.floor(Math.random() * allCombos.length)]);
    }
    return passwordCharacters.join("")

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
