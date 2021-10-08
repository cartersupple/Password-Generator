
var uppercase = ("Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M");
var lowercase = ("q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m");
var number = ("0","1","2","3","4","5","6","7","8","9");
var character = ("~","@","#","$","%","^","&","*","(",")","_","+");

var allCombos = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function customizePassword() {
  var passwordLength = prompt("How many characters would you like your password. It can be as short as 8 or as long as 128")
    if (passwordLength === ""){
    alert("You didn't put anything!")
    } else if (passwordLength < 8 || passwordLength > 128){
      alert("That's not between 8 and 128 c'mon man!")
    } else {
      uppercase = confirm("Do you want uppercase letters in your password?");
      lowercase = confirm("Do you want lowercase letters in your password?");
      number = confirm("Do you want to throw in some numbers?");
      character = confirm("How about some special characters (i.e #, &, @) to really spice it up!");

    } if (!uppercase && !lowercase && !number && !character) {
      choices = alert ("You gotta pick at least something...");
    } if (uppercase) {
      allCombos = allCombos.concat(uppercase);
    } if (lowercase){
      allCombos = allCombos.concat(lowercase);
    } if(number) {
      allCombos = allCombos.concat(number);
    }if (character) {
      allCombos.concat(character);

function generatePassword(uppercase, lowercase, number, character){
  var passwordCharacters = "";
for (var i=0; i < passwordLength; i++){
 passwordCharacters += (Math.floor(Math.random() * allCombos.length))
    return passwordCharacters;
}
}

}
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
