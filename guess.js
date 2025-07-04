// 1. Get all the nodes from HTML
const againbutton = document.querySelector(".again");
const num = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

// 2. Generate a random number
let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
console.log("Secret number:", random);

// 3. Check button functionality
const checkfunc = () => {
  const userGuess = Number(guess.value);
  console.log("User guessed:", userGuess);

  if (!userGuess) {
    message.textContent = "🚫 Please enter a number!";
  } else if (userGuess === random) {
    message.textContent = "🎉 Correct!";
    document.body.style.backgroundColor = "green";
    num.textContent = random;
    highscore.textContent = scores;
  } else if (userGuess < random) {
    scores--;
    score.textContent = scores;
    message.textContent = "📉 Too low!";
  } else if (userGuess > random) {
    scores--;
    score.textContent = scores;
    message.textContent = "📈 Too high!";
  }
};

// 4. Again button functionality
const againfunc = () => {
  scores = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  console.log("New secret number:", random);

  message.textContent = "Start guessing...";
  score.textContent = scores;
  num.textContent = "?";
  guess.value = "";
  document.body.style.backgroundColor = "";
};

check.addEventListener("click", checkfunc);
againbutton.addEventListener("click", againfunc);
