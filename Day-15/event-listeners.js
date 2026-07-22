//form events
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Form Submitted Successfully!");
});

const input = form.querySelector("input");

input.addEventListener("change", function () {
  console.log("Changed Value:", input.value);
});





//keyboard events
const input = document.getElementById("textbox");

input.addEventListener("keydown", function (event) {
  console.log("Key Pressed:", event.key);
});

input.addEventListener("keyup", function (event) {
  console.log("Key Released:", event.key);
});






//mouse events
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  alert("Button Clicked!");
});

button.addEventListener("dblclick", function () {
  alert("Button Double Clicked!");
});

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "lightgreen";
});

button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "";
});