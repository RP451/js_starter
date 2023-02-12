const playerSelection = '';
const computerSelection = getComputerSelection();

function getComputerSelection()
{
    const comp_options = ['rock','paper','scissors'];
    return comp_options[Math.floor(Math.random()*comp_options.length)];
}

console.log(getComputerSelection());