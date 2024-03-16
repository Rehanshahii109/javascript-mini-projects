const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+";

const allChars = upperCase + lowerCase + numbers + specialCharacters;

function createPassword(){
  let password = "";
  password +=upperCase[Math.floor(Math.random() * upperCase.length)];
  password +=lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password +=numbers[Math.floor(Math.random() * numbers.length)];
  password +=specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

 while(lenght > password.length){
    password +=allChars[Math.floor(Math.random() * specialCharacters.length)];
 }
   passwordBox.value = password;
}

 function copyPassword(){
   passwordBox.select();
   document.execCommand("copy");
 }




 