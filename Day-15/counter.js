let count = 0;

const counter = document.getElementById("counter");

const incrementBtn = document.getElementById("increment");

const decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", function () {
  count++;

  counter.textContent = count;
});

decrementBtn.addEventListener("click", function () {
  count--;

  counter.textContent = count;
});