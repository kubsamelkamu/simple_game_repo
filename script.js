let number_of_game = (prompt("Enter a of times you wanna to play a game: "));
let computer_score = 0;
let player_score = 0;

function getComputerChoice(game_option){
   const random_index = Math.floor(Math.random() * 3);
   return game_option[random_index];

}

const game_options = ["ROCK","PAPER","SCISSOR"];


function playGame(player_selection,computer_selection){

   // conditions to judge the game
   if ((player_selection === 'ROCK' && computer_selection == 'SCISSOR') ||
       ( player_selection == 'SCISSOR' && computer_selection == 'PAPER') ||
       (player_selection == 'PAPER' && computer_selection === 'ROCK')) {

        computer_score += 1;
   }else{
        player_score += 1;
   }
    

}


while (number_of_game > 0) {
    let playerselection = prompt("select Rock|Paper|Scissor: ").toUpperCase();
    let computerSelection = getComputerChoice(game_options);
    playGame(playerselection,computerSelection);
    number_of_game -= 1;
}

/*
function ScorePoint(scorefor = 'computer_win'){
    if (scorefor === 'computer_win') {
       computer_score++;
    }else if(scorefor === 'user_win'){
        player_score++;
    }

}*/
winnerOfGame(computer_score,player_score);

function winnerOfGame(computer_score,user_score){
    if(computer_score > user_score){
        console.log('Computer win the game by getting the score ' + computer_score + 'out of ' + number_of_game);
    }else if(computer_score < user_score){
        console.log('Human player win the game by getting the score ' + user_score + 'out of ' + number_of_game);
    }else{
        console.log('There is no winner');
    }

}
