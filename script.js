// Test connection
// console.log("Hello, it's test of connection")

// GET THE COMPUTER CHOICE
// Function getComputerChoice generating paper || rock || scissors
function getComputerChoice () {
    // Initialize natural randomNumber from 0 to 2
    let randomNumber = getRandomNumber();

    // Match it to Choice
    let computerChoice = (randomNumber == 1) ? 'paper' 
        : (randomNumber == 2) ? 'rock' 
        : 'scissors';

        return computerChoice;
}

// Fucntion: getRandomNumber: get random number from 0 to 2
// Math.random() * max
// Round it
function getRandomNumber () {
    return Math.floor(Math.random() * 3 + 1);
}

// variable memorizing the computerChoice
// let computerChoice = getComputerChoice();

// Log the answer
// console.log(computerChoice);

// TEST PROBABILITY

// declare counters for each choice
// let paperCounter = 0;
// let rockCounter = 0;
// let scissorsCounter = 0;

// for (let i = 0; i <= 100; i++) {
    // let computerChoice = getComputerChoice();
    // condition-comparison
    // if (computerChoice == 'paper') { paperCounter++; }
    // else if (computerChoice == 'rock') {rockCounter++; }
    // else scissorsCounter++;
    // count each choice
// }

// Log the probability
// console.log(paperCounter);
// console.log(rockCounter);
// console.log(scissorsCounter);


// GET THE HUMAN CHOICE

// Function empty getHumanChoice

function getHumanChoice () {
    let humanChoice;

    while (humanChoice == null) {
        // Ask with decription the choice in number, where 0 - paper, 1 - rock...
        // Get answer
        let numberChoice = prompt('Choose your shape: \n1 - paper \n2 - rock \n3 - scissors');
        
        // Match it to Choice, while it's not empty
        humanChoice = (numberChoice == 1) ? 'paper' 
            : (numberChoice == 2) ? 'rock'
            : (numberChoice == 3) ? 'scissors'
            : console.log('wrong input, try again');
    }

        // return the choice
        return humanChoice;
}

// let humanChoice = getHumanChoice();

// log the humanChoice
// console.log(humanChoice);

// INITIALIZE SCORE VARIABLES
// Declare the start value with 0

// Initialize humanScore
var humanScore = 0;

// Initialize computerScore
var computerScore = 0;


// SINGLE ROUND FUNCTION

// function comparing the computer and human choices (parameters)
function playRound(humanChoice, computerChoice) {

console.log(`Computer bet is ${computerChoice}`);

let winner;

// In strings scissors > rock > paper
// In game opposite, but we need compare scissors - paper
// IF computerChoice == 'scissors' && ...

if (computerChoice == 'scissors' && humanChoice == 'paper') {
    winner = 'computer';
}
else if (computerChoice == 'paper' && humanChoice == 'scissors') {
    winner = 'human';
}
// In strings scissors > rock > paper
else if (humanChoice < computerChoice) {
    winner = 'human';
}
else if (humanChoice > computerChoice) {
    winner = 'computer';
}
else { winner = 'draw'}

// For winner counter++
// Log lose or win
if (winner == 'computer') {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}
else if (winner == 'human') {
    humanScore++;
    console.log('Congratulations! You win!');
}
else { console.log("It's draw, try again"); }

console.log(`Your score: ${humanScore}, computer's score: ${computerScore}`);
}

// playRound(humanChoice, computerChoice);
// console.log(humanScore);
// console.log(computerScore);

// PLAY THE ENTIRE GAME

// function running some rounds with playRound()
function playEntireGame () {

// loop 'for' running playRound - i - number of rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}:`)
        // ask for each round humanChoice and computerChoice;
        playRound(getHumanChoice(), getComputerChoice());
    }

// log the champion
    if (computerScore > humanScore) {
        console.log('You lose :( Refresh page to try again');
    }
    else if (computerScore < humanScore) {
        console.log('You win! HURRRRRRRRAAAAAY! \nRefresh page to play again')
    }
    else { console.log("It's draw. It was hard fight. Try again?")}
}

playEntireGame();

