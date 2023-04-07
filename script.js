// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ",", ")", "-", "="]

let builtArray = []

// Write password to the #password input
function generatePassword() {
  let endProduct = []
  if (confirm("Do you want your password to contain lowercase letters?")) {

    builtArray = [...builtArray, ...lowerAlphabet];
    console.log(builtArray)

  }

  if (confirm("Do you want uppercase letters?")) {

    builtArray = [...builtArray, ...upperAlphabet]
    console.log(builtArray)

  }

  if (confirm("Do you want numbers?")) {

    builtArray = [...builtArray, ...numbers]
    console.log(builtArray)

  }

  if (confirm("Do you want special characters?")) {

    builtArray = [...builtArray, ...special]
    console.log(builtArray)

  }

  let password = "";
  let passwordLength = prompt("How long do you want the password to be?")

  if (passwordLength < 8 || passwordLength > 128) {

    alert("Please choose appropriate length for password");
    
    return
  }
  
  for (let i = 0; i < passwordLength; i++) {
    endProduct.push(builtArray[Math.floor(Math.random() * builtArray.length)])
    
  }
  
  console.log(endProduct)
  return endProduct.join("")
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  builtArray = []
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
