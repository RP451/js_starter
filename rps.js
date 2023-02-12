const playerSelection = "rock";
const computerSelection = getComputerSelection();

function getComputerSelection()
{
    const comp_options = ['rock','paper','scissors'];
    return comp_options[Math.floor(Math.random()*comp_options.length)];
}
console.log(computerSelection);
console.log(playerSelection);

function playRound(computerSelection, playerSelection)
{
    if(computerSelection === playerSelection)
    {
        console.log(1);
        return("It's a tie !");
    }
    else if(computerSelection === 'rock')
    {
        if(playerSelection === 'scissors')
        {
            console.log(2);
            return("Computer wins !");
        }
        else if(playerSelection === 'paper')
        {
            console.log(3);
            return("Player wins !");
        }
        else
        {
            console.log(4);
            return("It's a tie");
        }
    }
    else if(computerSelection === 'paper')
    {
        if(playerSelection === 'rock')
        {
            console.log(5);
            return("Computer wins !");
        }
        else if(playerSelection === 'scissors')
        {
            console.log(6);
            return("Player wins !");
        }
        else
        {
            console.log(7);
            return("It's a tie !");
        }
    }
    else if(computerSelection === 'scissors')
    {
        if(playerSelection === 'rock')
        {
            console.log(8);
            return("Player wins !");
        }
        else if(playerSelection === 'paper')
        {
            console.log(9);
            return("Computer wins !");
        }
        else
        {
            console.log(10);
            return("It's a tie !");
        }
    }
}

console.log(playRound(computerSelection, playerSelection));