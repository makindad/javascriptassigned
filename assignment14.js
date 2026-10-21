const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const continueButton = document.getElementById("continueButton");

const startingSeconds = 120;
let timeLeft = startingSeconds;
let timer;

function showTime() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  timeDisplay.textContent = minutes + ":" + seconds;
}

function runTimer() {
  timer = setInterval(function () {
    timeLeft--;
    showTime();

    if (timeLeft === 0) {
      clearInterval(timer);
      stopButton.classList.add("hidden");
      message.textContent = "Time's up!";

      setTimeout(resetTimer, 3000);
    }
  }, 1000);
}

function resetTimer() {
  timeLeft = startingSeconds;
  showTime();
  message.textContent = "";
  startButton.classList.remove("hidden");
}


startButton.addEventListener("click", function () {
  startButton.classList.add("hidden");
  stopButton.classList.remove("hidden");
  message.textContent = "";
  runTimer();
});

stopButton.addEventListener("click", function () {
  clearInterval(timer);
  stopButton.classList.add("hidden");
  continueButton.classList.remove("hidden");
  message.textContent = "Paused";
});

continueButton.addEventListener("click", function () {
  continueButton.classList.add("hidden");
  stopButton.classList.remove("hidden");
  message.textContent = "";
  runTimer();
});


showTime();