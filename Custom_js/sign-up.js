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
  if(/^\s*$/.test(fullName.value)){
    invalid(fullName, fullNameText, "Required");
  } else if(/^[a-zA-Z ]+$/.test(fullName.value)){
    valid(fullName, fullNameText, "Looks good");
  } else {
    invalid(fullName, fullNameText, "Invalid");
  }
}

function userIDValidation() {
  if(/^\s*$/.test(userID.value)){
    invalid(userID, userIDText, "Required");
  } else if(/^[A-Z]{1}.{3,10}[^a-zA-Z]{1}$/.test(userID.value)){
    valid(userID, userIDText, "Looks good");
  } else {
    invalid(userID, userIDText, "Invalid");
    // invalid(userID, userIDText, "Invalid, Starts with Capital, ends with special character or number and 5-12 characters long")
  }
}

function countryValidation() {
  if(/^\s*$/.test(country.value)){
    invalid(country, countryText, "Required");
  } else if(/^[a-zA-Z]+$/.test(country.value)){
    valid(country, countryText, "Looks good");
  } else {
    invalid(country, countryText, "Invalid");
  }
}

function zipCodeValidation() {
  if(/^\s*$/.test(zipCode.value)){
    invalid(zipCode, zipCodeText, "Required");
  } else if(/[0-9]{4}\s*[a-zA-Z]{2}$/.test(zipCode.value)){
    valid(zipCode, zipCodeText, "Looks good");
  } else {
    invalid(zipCode, zipCodeText, "Invalid");
  }
}

function languageValidation(){
  if(/^\s*$/.test(language.value)){
    invalid(language, languageText, "Required");
  } else if(/^[a-zA-Z]+$/.test(language.value)){
    valid(language, languageText, "Looks good");
  } else {
    invalid(language, languageText, "Invalid");
  }
}

function emailValidation(){
  if(/^\s*$/.test(email.value)){
    invalid(email, emailText, "Required");
  } else if(/^[a-zA-Z0-9]+([\_\.\-]?[a-zA-Z0-9])*@[a-zA-Z0-9]+([\_\.\-]?[a-zA-Z0-9])*\.[a-zA-Z]{2,}$/.test(email.value)){
    valid(email, emailText, "Looks good");
  } else {
    invalid(email, emailText, "Invalid");
  }
}

function passwordValidation(){
  if(/^\s*$/.test(password.value)){
    invalid(password, passwordText, "Required");
  } else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{12,}$/.test(password.value) && password.value.length<14){
    passwordText.textContent = "Weak, could be better";
    passwordText.style.color = "orange";
    password.style.border = "3px solid orange";
  } else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{12,}$/.test(password.value) && password.value.length>=14){
    valid(password, passwordText, "Looks good");
  } else {
    invalid(password, passwordText, "Bad");
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  fullNameValidation();
  userIDValidation();
  countryValidation();
  zipCodeValidation();
  languageValidation();
  emailValidation();
  passwordValidation();
});
