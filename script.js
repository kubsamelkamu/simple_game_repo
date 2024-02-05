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

        player_score += 1;
        confirm('human player win this game-round');
   }else{
        computer_score += 1;
        confirm('computer player win this game-round');
   }
    

}

while (number_of_game > 0) {
    let playerselection = prompt("select Rock|Paper|Scissor: ").toUpperCase();
    let computerSelection = getComputerChoice(game_options);
    playGame(playerselection,computerSelection);
    number_of_game -= 1;
}



getPlayerScore(computer_score,player_score);

function getPlayerScore(computer_score,user_score){
    const number_of_game = computer_score + player_score;
    if(computer_score > user_score){
        console.log('Computer win the game by getting the score ' + computer_score + ' out of ' + number_of_game);
    }else if(computer_score < user_score){
        console.log('Human player win the game by getting the score ' + user_score + ' out of ' + number_of_game);
    }else{
        console.log('There is no winner');
    }

}
