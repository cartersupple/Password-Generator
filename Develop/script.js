// Assignment code here
var uppercase = ("Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M");
var lowercase = ("q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l"

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
