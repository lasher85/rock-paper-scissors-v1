// definition of function getComputerChoice

let computerChoice = function getComputerChoice() {

    // 1. Generate random number in the range 0 to 1
    // 2. Change generated number so it is only equal to 1, 2 or 3
    // 3. Assign number 1, 2 and 3 to Rock, Paper & Scissors respectively
    // 4. Return a string with computer's choice in computerChoice variable

    const getRandomNumber = Math.floor(Math.random() * 3) + 1;
    switch (getRandomNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors"
            break;
    }
};

computerChoice();
console.log(`Computer Choice: ${computerChoice}`);
