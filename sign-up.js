const fullName = document.getElementById('full-name-sign-up');
const submitButton = document.getElementById('sign-up-button');
const fullNameText = document.getElementById('full-name-text')

submitButton.addEventListener('click', (event) => {
  console.log(fullName.value);
  console.log(event);
  fullNameText.textContent = "hia";
  // fullNameText.style.color = "black"
  
  // console.log("hello");
});
