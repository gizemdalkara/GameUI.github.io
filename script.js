const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    //play starting
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerSelection = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']    
        playerSelection.forEach(option => {
            option.addEventListener('click',function(){
  
                const heart = document.querySelector('.heart');
                moves++;
                heart.innerText = `Heart: ${5-moves}`;
                const computerPlay = Math.floor(Math.random()*3);
                const computerSelection = computerOptions[computerPlay];
                //check winner
                winner(this.innerText,computerSelection) 
                // 5 times turn
                if(moves == 5){
                    gameover(playerSelection,heart);
                }
            })
        })     
    }
    //winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Player Lost! Paper beats Rock.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result.textContent = 'Player Won! Rock beats Scissor. '
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Player Lost! Rock beats Scissor. ';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won! Scissor beats Paper. ';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Player Lost. Scissor beats Paper. ';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won! Paper beats Rock.';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    //game over
    const gameover = (playerSelection,heart) => {
        const choose = document.querySelector('.move');
        const result = document.querySelector('.result');
        playerSelection.forEach(option => {
            option.style.display = 'none';
        })
        choose.innerText = 'Game Over!!'
        heart.style.display = 'none';
        if(playerScore > computerScore){
            result.innerText = 'Player Won!'
        }
        else if(playerScore < computerScore){

            result.innerText = 'Player Lost!';
        }
        else{
            result.innerText = 'Tie';
        }
    }
    playGame();   
}
game();