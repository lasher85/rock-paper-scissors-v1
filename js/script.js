// definition of function getComputerChoice

function getComputerChoice() {

    // 1. Generate random number in the range 0 to 1
    // 2. Change generated number so it is only equal to 1, 2 or 3
    // 3. Assign number 1, 2 and 3 to Rock, Paper & Scissors respectively
    // 4. Write a string with computer's choice in the getComputerChoice variable

    const getRandomNumber = Math.floor(Math.random() * 3) + 1;
    switch (getRandomNumber) {
        case 1:
            getComputerSelection = "Rock";
            break;
        case 2:
            getComputerSelection = "Paper";
            break;
        case 3:
            getComputerSelection = "Scissors"
            break;
    }
    return getComputerSelection;
};

// definition of function getHumanChoice

function getHumanChoice() {

    // 1. Ask user to input his choice - use prompt function
    // 2. Write user input into the variable getPrompt
    // 3. Fix formatting of the obtained string variable (first letter capitalized, rest of the letters lower case)
    // 4. Write final user input into getHumanChoice variable

    const getHumanSelection = prompt("Type in your choice: Rock, Paper or Scissors:");
    return getHumanSelection.charAt(0).toUpperCase() + getHumanSelection.slice(1).toLowerCase();
};

// Definition of function for playing the entire game

function playGame() {

    // Initialize variables for storing the human and computer scores

    let humanScore = 0;
    let computerScore = 0;

    // Definition of function for playing a single round of the game

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log('This is a draw!');
        } else if (
            (computerChoice === 'Rock' & humanChoice === 'Scissors') ||
            (computerChoice === 'Paper' & humanChoice === 'Rock') ||
            (computerChoice === 'Scissors' & humanChoice === 'Paper')) {
            console.log('Computer wins!');
            computerScore++;
        } else {
            console.log('Human wins!');
            humanScore++;
        }
    };

    // // Round 1

    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();

    // console.log(`Human Choice - Round 1: ${humanSelection}`);
    // console.log(`Computer Choice - Round 1: ${computerSelection}`);

    // playRound(humanSelection, computerSelection);


    // // Round 2

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();

    // console.log(`Human Choice - Round 2: ${humanSelection}`);
    // console.log(`Computer Choice - Round 2: ${computerSelection}`);

    // playRound(humanSelection, computerSelection);


    // // Round 3

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();

    // console.log(`Human Choice - Round 3: ${humanSelection}`);
    // console.log(`Computer Choice - Round 3: ${computerSelection}`);

    // playRound(humanSelection, computerSelection);

    // // Round 4

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();

    // console.log(`Human Choice - Round 4: ${humanSelection}`);
    // console.log(`Computer Choice - Round 4: ${computerSelection}`);

    // playRound(humanSelection, computerSelection);

    // // Round 5

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();

    // console.log(`Human Choice - Round 5: ${humanSelection}`);
    // console.log(`Computer Choice - Round 5: ${computerSelection}`);

    // playRound(humanSelection, computerSelection);

    const humanSelection = [];
    const computerSelection = [];

    for (let round = 1; round <= 5; round++) {

        humanSelection[round] = getHumanChoice();
        computerSelection[round] = getComputerChoice();

        console.log(`Human Choice - Round ${round}: ${humanSelection[round]}`);
        console.log(`Computer Choice - Round ${round}: ${computerSelection[round]}`);

        playRound(humanSelection[round], computerSelection[round]);

    };

    // Final Score

    console.log('Results of the game:')

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

};

alert(`Let's play the game. Prepare for 5 rounds of Rock, Paper, Scissors match :)`)
playGame();