// Test connection
// console.log("Hello, it's test of connection")

// GET THE COMPUTER CHOICE
// Function getComputerChoice generating paper || rock || scissors
function getComputerChoice () {
    // Initialize natural randomNumber from 0 to 2
    let randomNumber = getRandomNumber();

    // Match it to Choice
    let computerChoice = (randomNumber == 0) ? 'paper' 
        : (randomNumber == 1) ? 'rock' 
        : 'scissors';

        return computerChoice;
}

// Fucntion: getRandomNumber: get random number from 0 to 2
// Math.random() * max
// Round it
function getRandomNumber () {
    return Math.floor(Math.random() * 3);
}

// variable memorizing the computerChoice
let computerChoice = getComputerChoice();

// Log the answer
console.log(computerChoice);

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
    // Ask with decription the choice in number, where 0 - paper, 1 - rock...
    // Get answer
    let numberChoice = prompt('Choose your shape: \n0 - paper \n1 - rock \n 2 - scissors');

    // Match it to Choice
    let humanChoice = (numberChoice === '0') ? 'paper' 
        : (numberChoice == 1) ? 'rock'
        : (numberChoice == 2) ? 'scissors'
        : 'wrong input';

        // return the choice
        return humanChoice;
}

let humanChoice = getHumanChoice();

// log the humanChoice
console.log(humanChoice);
