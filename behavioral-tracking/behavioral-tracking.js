// Getting some elements from the DOM
const submitButton = document.getElementById('sign-up-button');
const outText = document.getElementById('behavior');
const inputs = Array.from(document.getElementsByClassName('input-text'));

// Making an array to keep track of how many times a key has been pressed when some input was focussed
const mapKeysDown = [];
for (let i = 0; i < 9; i++) {
  mapKeysDown[i] = 0;
}

// Variables for tracking
let amountOfClicks = 0;
let datePageLoaded = new Date();

// When a click occurs on the page, increment the amountOfClicks counter
window.addEventListener('click', (event) => {
  amountOfClicks++;
});

// When submit button is pressed, unveil the stats.
submitButton.addEventListener('click', (event) => {
  let timeSpent = Math.round(((new Date()).getTime() - datePageLoaded.getTime()) / 1000);
  
  let output = `${getInfoInputs()}
  clicks: ${amountOfClicks}<br> 
  time spent (in seconds): ${timeSpent}`
  outText.innerHTML = output;

});


// Add and delete event listeners for every input field
Array.from(inputs).forEach(element => {
  element.addEventListener('focus', (event) => {
    element.addEventListener('keydown', focusListener);
  });
  element.addEventListener('blur', (event) => {
    element.removeEventListener('keydown', focusListener);
  })
});

// Increment the counter for the appropriate input field
function focusListener(event) {
  mapKeysDown[inputs.indexOf(event.currentTarget)]++
}

// Make readable format of the info
function getInfoInputs() {
  let out = `input name, amount of keys pressed, total characters form value<br>`
  for (let i = 0; i < inputs.length; i++) {
    let name = inputs[i].name;
    out += `${name.slice(0,-8)}, ${mapKeysDown[i]}, ${inputs[i].value.length}<br>`
  }
  return out;
}


