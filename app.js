// function(){}
// ()=>{}

// one variable for each class:)

const game = () => {
  let pScore = 0;
  let cScore = 0;

  // starting game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // playing match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button"); // all buttons:)
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const hands = document.querySelectorAll(".hands img"); // both hands

    // for reseting animation
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        // every time an animation ends, this is gonna run:)
        this.style.animation = "";
      });
    });

    // computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      // traversing on all options for checking the click:)
      option.addEventListener("click", function () {
        // => not used because 'this' will be bound to outer =>
        // computer choice
        const computerNumber = Math.floor((Math.random() * 10) % 3);
        const computerChoice = computerOptions[computerNumber];

        // comparision and update image should be done after 2 sec:)

        setTimeout(() => {
          // call compare hands
          compareHands(this.textContent, computerChoice);
          // update images
          playerHand.src = `/Stone-paper-scissors-game/assets/${this.textContent}.png`;
          computerHand.src = `/Stone-paper-scissors-game/assets/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    // update text
    const winner = document.querySelector(".winner"); // to replace 'choose an option' to 'current result':)

    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "You win:)";
        pScore++;
      } else {
        winner.textContent = "You loose:(";
        cScore++;
      }
      updateScore();
      return;
    }

    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "You win:)";
        pScore++;
      } else {
        winner.textContent = "You loose:(";
        cScore++;
      }
      updateScore();
      return;
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "You win:)";
        pScore++;
      } else {
        winner.textContent = "You loose:(";
        cScore++;
      }
      updateScore();
      return;
    }
  };

  // calling innner functions
  startGame();
  playMatch();
};

game();
