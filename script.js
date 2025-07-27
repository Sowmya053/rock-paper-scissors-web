const choices = ['rock', 'paper', 'scissors'];
const icons = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

let userScore = 0;
let aiScore = 0;

function playGame(userChoice) {
  const aiChoice = choices[Math.floor(Math.random() * 3)];
  const resultText = document.getElementById("result");

  document.getElementById("user-choice").textContent = icons[userChoice];
  document.getElementById("ai-choice").textContent = icons[aiChoice];

  if (userChoice === aiChoice) {
    resultText.textContent = `It's a Tie! 🤝 Both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && aiChoice === "scissors") ||
    (userChoice === "paper" && aiChoice === "rock") ||
    (userChoice === "scissors" && aiChoice === "paper")
  ) {
    userScore++;
    document.getElementById("user-score").textContent = userScore;
    resultText.textContent = `You Win! 🎉 ${userChoice} beats ${aiChoice}`;
  } else {
    aiScore++;
    document.getElementById("ai-score").textContent = aiScore;
    resultText.textContent = `You Lose! 💥 ${aiChoice} beats ${userChoice}`;
  }
}

function resetGame() {
  userScore = 0;
  aiScore = 0;
  document.getElementById("user-score").textContent = 0;
  document.getElementById("ai-score").textContent = 0;
  document.getElementById("result").textContent = "Make your move!";
  document.getElementById("user-choice").textContent = '❔';
  document.getElementById("ai-choice").textContent = '❔';
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'r') playGame('rock');
  if (e.key.toLowerCase() === 'p') playGame('paper');
  if (e.key.toLowerCase() === 's') playGame('scissors');
  if (e.key === 'Escape') resetGame();
});
