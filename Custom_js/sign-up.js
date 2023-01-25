const submitButton = document.getElementById("sign-up-button");
const fullName = document.getElementById("full-name-sign-up");
const fullNameText = document.getElementById("full-name-text");
const userID = document.getElementById("user-id-sign-up");
const userIDText = document.getElementById("user-id-text");
const country = document.getElementById("country-sign-up");
const countryText = document.getElementById("country-text");
const zipCode = document.getElementById("zip-code-sign-up");
const zipCodeText = document.getElementById("zip-code-text");
const language = document.getElementById("language-sign-up");
const languageText = document.getElementById("language-text");
const email = document.getElementById("email-sign-up");
const emailText = document.getElementById("email-text");
const password = document.getElementById("password-sign-up");
const passwordText = document.getElementById("password-text");
const address = document.getElementById("address-sign-up");
const bio = document.getElementById("bio-sign-up");
const gender = document.getElementById("gender-sign-up");

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = uppercase.toLowerCase();
const numbers = '0123456789';

function containsLowerCase(input){
  return input.toUppercase() != input;
}

function containsUpperCase(input){
  return input.toLowercase() != input
}

function containsNumber(input){
  for(let i = 0; i<input.length; i++){
    if(numbers.includes(input[i])){
      return true;
    }
  } return false;
}

function containsSpecialCharacter(input) {
  let out = "";
  for (c of input) {
    if (!(uppercase.includes(c) || lowercase.includes(c) || numbers.includes(c))) {
      out += c;
    }
  }
  return out.length != 0;
}

function valid(input, text, message){
  text.textContent = message;
  text.style.color = "green";
  input.style.border = "3px solid green";
}

function invalid(input, text, message){
  text.textContent = message;
  text.style.color = "red";
  input.style.border = "3px solid red";
}

function fullNameValidation() {
  console.log(fullName.value);
  if(fullName.value.trim().length == 0){
    invalid(fullName, fullNameText, "Required");
    return false;
  } else if(!containsNumber(fullName.value) && !containsSpecialCharacter(fullName.value)){
    valid(fullName, fullNameText, "Looks good");
    return true;
  } else {
    invalid(fullName, fullNameText, "Invalid");
    return false;
  }
}

function userIDValidation() {
  let length = userID.value.length
  let lastChar = userID(length-1)
  if(userID.value.trim().length == 0){
    invalid(userID, userIDText, "Required");
    return false;
  } else if(length >= 5 && length <= 12 && uppercase.includes(userID.value[0]) && (numbers.includes(userID.value[length-1]) || containsSpecialCharacter(lastChar))){
    valid(userID, userIDText, "Looks good");
    return true;
  } else {
    invalid(userID, userIDText, "Invalid");
    // invalid(userID, userIDText, "Invalid, Starts with Capital, ends with special character or number and 5-12 characters long");
    return false;
  }
}

function countryValidation() {
  if(country.value.trim().length == 0){
    invalid(country, countryText, "Required");
    return false;
  } else if(!containsNumber(country.value) && !containsSpecialCharacter(country.value)){
    valid(country, countryText, "Looks good");
    return true;
  } else {
    invalid(country, countryText, "Invalid");
    return false;
  }
}

function zipCodeValidation() {
  if(zipCode.value.length == 0){
    invalid(zipCode, zipCodeText, "Required");
    return false;
  } else if(zipCode.value.length == 6 && numbers.includes(zipCode.value[0]) && numbers.includes(zipCode.value[1]) && 
    numbers.includes(zipCode.value[2]) && numbers.includes(zipCode.value[3]) && uppercase.includes(zipCode.value[4].toUppercase()) && uppercase.includes(zipCode.value[5].toUppercase())){
    valid(zipCode, zipCodeText, "Looks good");
    return true;
  } else {
    invalid(zipCode, zipCodeText, "Invalid");
    return false;
  }
}

function languageValidation(){
  if (language.value.length == 0){
    invalid(language, languageText, "Required");
    return false;
  } else if(!containsSpecialCharacter(language.value) && !containsNumber(language.value)){
    valid(language, languageText, "Looks good");
    return true;
  } else {
    invalid(language, languageText, "Invalid");
    return false;
  }
}

function emailValidation(){
  if(email.value.length == 0){
    invalid(email, emailText, "Required");
    return false;
  } else if(email.value.includes('@') && email.value[0] != '@' && email.value[email.value.length - 1] != '@' && email.value[email.value.length - 1] != '.' && email.value.indexOf('.') > email.value.indexOf('@') + 1){
    valid(email, emailText, "Looks good");
    return true;
  } else {
    invalid(email, emailText, "Invalid");
    return false;
  }
}

function passwordValidation(){
  if(password.value.length == 0){
    invalid(password, passwordText, "Required");
    return false;
  } else if(containsLowerCase(password.value) && containsNumber(password.value) && containsSpecialCharacter(password.value) && containsUpperCase(password.value) && password.value.length<14){
    passwordText.textContent = "Weak, could be better";
    passwordText.style.color = "orange";
    password.style.border = "3px solid orange";
    return true;
  } else if(containsLowerCase(password.value) && containsNumber(password.value) && containsSpecialCharacter(password.value) && containsUpperCase(password.value) && password.value.length >= 14){
    valid(password, passwordText, "Looks good");
    return true;
  } else {
    invalid(password, passwordText, "Bad");
    return false;
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if(fullNameValidation() & userIDValidation() & countryValidation() & zipCodeValidation() 
    & languageValidation() & emailValidation() & passwordValidation()){
      console.log("hey");
      alert(`You are all setup!
            Fullname: ${fullName.value}
            UserID: ${userID.value}
            Address: ${address.value}
            Country: ${country.value}
            Zip code: ${zipCode.value}
            Language: ${language.value}
            Bio: ${bio.value}
            Gender: ${gender.value}
            Email: ${email.value}
            Password: ${password.value}
      `);
  }
});


