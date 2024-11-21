let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate random number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
    };

// Get absoulte value of a number
  const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2)
    };

// Comapre guesses between user and computer
  const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    if (userGuess < 0 || userGuess > 9) {
        alert('Your number is out of range! Enter a number from 0 to 9.');
    }
    if (userGuess === computerGuess) {
        return true;
    } else if ((getAbsoluteDistance(userGuess, targetNumber)) < (getAbsoluteDistance(computerGuess, targetNumber))) {
        return true;
    } else if ((getAbsoluteDistance(userGuess, targetNumber)) > (getAbsoluteDistance(computerGuess, targetNumber))) {
        return false;
    }   
    };
  
// Update the game score
  const updateScore = winner => {
    if (winner === 'human')
      humanScore += 1;
    else if (winner === 'computer')
      computerScore += 1;
    };

// Advance to next round
  const advanceRound = () => {
    currentRoundNumber += 1;
    };
