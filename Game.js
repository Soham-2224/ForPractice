const game = () => {
    var pScore = 0;
    var cScore = 0;
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');


        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            pScore = 0;
            cScore = 0;
            const playerScore = document.querySelector('.player__score p');
            const computerScore = document.querySelector('.computer__score p');
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
            startGame();
        });
    }

    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player__hand');
        const computerHand = document.querySelector('.computer__hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        })
        
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                    // here is where we call compare hands
                    compareHands(this.textContent, computerChoice);

                    // update Images
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;

                    restartGame(pScore, cScore);
                }, 1500);

                //Animation
                playerHand.style.animation = "shakePlayer 0.5s 3";
                computerHand.style.animation = "shakeComputer 0.5s 3";
            })
        })  
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player__score p');
        const computerScore = document.querySelector('.computer__score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    //my code
    const restartGame = (pS, cS) => {

        const finalTag = document.querySelector('.tag');
        const resetBtn = document.querySelector('.intro button');

        if (pS === 10 || cS === 10) {
            if (pS === 10 && cS === 10) {
                finalTag.textContent = 'This is a Tie';
            }else if (cS < 10){
                finalTag.textContent = 'You Win';
            }else{
                finalTag.textContent = 'You Lose';
            }
            resetBtn.textContent = "TRY AGAIN";
            resetBtn.addEventListener('click', () => {
                introScreen.classList.remove('fadeIn');
                match.classList.remove('fadeOut');
                introScreen.classList.add('fadeOut');
                match.classList.add('fadeIn');

               
                
            })

            introScreen.classList.remove('fadeOut');
            match.classList.remove('fadeIn');
            introScreen.classList.add('fadeIn');
            match.classList.add('fadeOut');

           
        }
    }
    
    //my code

    const compareHands = (playerChoice, computerChoice) => {
        //update text
        const winner = document.querySelector('.winner');
        //checking if tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //call all inner functions
    startGame();
    playMatch();
    
}

//start the game function
game();