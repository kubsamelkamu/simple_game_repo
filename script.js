// Get the  refrence to the Buttons
const rockButton = document.getElementById('rock');
const scissorButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');


// Get the refrence to the result id
const resultid = document.getElementById('result');
resultid.style.color = 'red';
resultid.style.fontSize = '30px';



// creating a function that perform game to be played

function playGame(playerChoice) {

    // Generate computer's choice randomly
    const computerChoices = ['rock', 'paper', 'scissors'];
    const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    const winner = determineWinner(playerChoice,computerChoice);
    
    resultid.textContent = `you choose ${playerChoice}, computer choose ${computerChoice}. ${winner}`
}

function determineWinner(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        return 'it is tie , and there is no winner in this round.';
    }else if (playerChoice === 'rock' && computerChoice === 'scissor'
        || playerChoice === 'paper' && computerChoice === 'rock' ||
         playerChoice === 'scissor' && computerChoice === 'paper') {
        return 'you win this round!!!';
    }else{
        return 'computer win this round!!!';
    }
     
}

// function addEvent Listenner is added to the buttons

rockButton.addEventListener('click',() => playGame('rock'));
scissorButton.addEventListener('click',() =>playGame('scissor'));
paperButton.addEventListener('click',() => playGame('paper'));

