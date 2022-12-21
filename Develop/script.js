// Assignment code here
const chars = {
    alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    alphaLower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"   
}

/* const symbols = ["!", "\\", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; */

let emptyPassword = [];

const passwordLength = function () {

  const length = window.prompt("How long do you want your password to be?"); 
  
    if (length >= 8  && length <= 128) {

      window.confirm("Excellent! Would you like Upper Case characters in your password?");       
        if (true) {     
          console.log(chars.alphaUpper[Math.floor(Math.random * chars.alphaUpper.length)]);
          emptyPassword.push(chars.alphaUpper[Math.floor(Math.random * chars.alphaUpper.length)]);
        }
      
      window.confirm("Super! Would you like Lower Case characters in your password?");
        if (true) {
          emptyPassword.push(Math.floor(Math.random * chars.alphaLower.length));
        }

      window.confirm("Awesome! Would you like Numbers in your password?");
        if (true) {
          emptyPassword.push(Math.floor(Math.random * chars.numbers.length));
        }

      window.confirm("Fantastic! Would you like Symbols in your password?");
        if (true) {
          emptyPassword.push(Math.floor(Math.random * chars.symbols.length));
        }

    }
    
    else {

        window.alert("This isn't a number between 8 and 128! Try Again!");
        passwordLength();
      
      }

    }

passwordLength();

console.log(emptyPassword);
    


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);