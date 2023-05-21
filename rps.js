const playerSelection = "rock";
const computerSelection = getComputerSelection();

function getComputerSelection()
{
    const comp_options = ['rock','paper','scissors'];
    return comp_options[Math.floor(Math.random()*comp_options.length)];
}
console.log("computer plays"+computerSelection);
console.log("player plays"+playerSelection);

function playRound(computerSelection, playerSelection)
{
    if(computerSelection === playerSelection)
    {
        console.log(1);
        return("It's a tie !");
    }
    else if(computerSelection === 'rock' && playerSelection ==='scissors' || computerSelection === 'scissors' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'rock')
    {
        console.log(2);
        return("Computer wins !");
    }
    else if(playerSelection === 'rock' && computerSelection ==='scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock')
    {
        console.log(3);
        return("Player wins !");
    }
}

console.log(playRound(computerSelection, playerSelection));