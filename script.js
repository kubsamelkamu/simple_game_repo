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

        return 'user_win';
   }else{
        return 'computer_win';
   }
    

}

let playerselection = prompt("select Rock|Paper|Scissor: ").toLowerCase();
let computerSelection = getComputerChoice(game_options);

playGame(playerselection,computerSelection);

let number_of_game = parseInt(prompt("Enter a of times you wanna to play a game: "));

while (number_of_game > 0) {
    playGame(playerselection,computerSelection);
    number_of_game -= 1;
}


function ScorePoint(scorefor = 'computer_win'){
    if (scorefor === 'computer_win') {

        
    }

}
