const message = document.getElementById("message");

let timer;

// setTimeout()

document.getElementById("startBtn").addEventListener("click", () => {
  timer = setTimeout(() => {
    message.textContent = "setTimeout Executed!";
  }, 3000);
});

// clearTimeout()

document.getElementById("stopBtn").addEventListener("click", () => {
  clearTimeout(timer);

  message.textContent = "Timer Stopped";
});

// setInterval()

let count = 0;

const interval = setInterval(() => {
  console.log("Interval:", ++count);

  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);