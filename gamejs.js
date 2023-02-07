let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
 function getComputerChoice() {
   const choices = ['r','p','s'];
   const randomNumber = Math.floor(Math.random() * 3);
   return choices[randomNumber];
 }
 function convertToWord(letter) {
   if (letter === "r") return "rock";
   if (letter === "p") return "paper";
   return "scissor";
 }
function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = 'you win';
  userChoice_div.classList.add('green-glow');
  setTimeout(() =>userChoice_div.classList.remove('green-glow'),400);
  computerChoice_div.classList.add('purple-glow');
   setTimeout( () => computerChoice_div.classList.remove('purple-glow'), 400);
   if(userScore > 20) location.replace('c2.html');
}
function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = 'you lost';
  userChoice_div.classList.add('red-glow');
  setTimeout(() =>userChoice_div.classList.remove('red-glow'),400);
  computerChoice_div.classList.add('purple-glow');
   setTimeout( () => computerChoice_div.classList.remove('purple-glow'), 400);
   if(computerScore > 20) location.replace('c1.html');
}
function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  result_p.innerHTML = 'draw';
  userChoice_div.classList.add('gray-glow');
  setTimeout(() =>userChoice_div.classList.remove('gray-glow'),400);
  computerChoice_div.classList.add('purple-glow');
   setTimeout( () => computerChoice_div.classList.remove('purple-glow'), 400);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    }
  }
  function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
  }
  main();
