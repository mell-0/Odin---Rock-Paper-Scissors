console.log("Hello from script");

/*
    getComputerChoice method 
    - will randomly return one of the following string values: “rock”, “paper” or “scissors”
    - math floor rounds a decimal to the lowest whole number, so 0.1 = 0, 1.3 = 1, 2.9 = 2
    - math random returns a decimal from 0 - 1
    - I use this to get a number from 0 - 2
*/ 
function getComputerChoice()
{ 
    let randomNum = Math.floor(Math.random() * 3);
    
    // if (randomNum === 0)
    //     return 'Rock';
    // else if (randomNum === 1)
    //     return 'Paper';
    // else
    //     return 'Scissors';

    switch (randomNum)
    {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }    
}

/*
    getHumanChoice method 
    - retuns rock, paper, & scissors based on numbers 0-2, any other number will return rock
*/ 
let getHumanChoice = () => {
    return (prompt("enter rock, paper, or scissors", "rock")); // prompt gets input as a string
}


// initalizing computer and human scores
let compScore = userScore = 0;


/*
    playRound method
*/
function playRound(humanChoice, computerChoice){
    // making humanChoice case insensitive
    humanChoice = String(humanChoice).toLocaleLowerCase();

    console.log(`You picked: ${humanChoice}`);
    console.log(`Computer picked: ${computerChoice}`);

    if (humanChoice === computerChoice)
    {
        console.log("Tie! Both got " + humanChoice);
    }
    else
    { // not the same
        if (humanChoice === "scissor")
        {
            if (computerChoice === "paper")
            {
                console.log('You win! scissor beats paper');
                userScore++;
            }
            else 
            { // if computer got rock
                console.log('You loose! rock beats scissor');
                compScore++;
            }
        }
        else if (humanChoice === "rock")
        {
            if (computerChoice === "paper")
            {
                console.log('You loose! paper beats rock');
                compScore++;
            }
            else
            { // if computer got scissors
                console.log('You win! rock beats scissor');
                userScore++;
            }
        }
        else
        { // if human got paper
            if (computerChoice === "scissors")
            {
                console.log('You loose! scissors beats paper');
                compScore++;
            }
            else
            { // if computer got rock
                console.log('You win! paper beats rock');
                userScore++;
            }
        }
    }
    

}

playRound(getHumanChoice(), getComputerChoice());

// for (let i = 0; i<5; i++)
// {
//     console.log(getHumanChoice());
// }

// testing the random number generator
// let x = Math.floor(Math.random() * 3);
// while (x !== 1)
// {
//     console.log(x);
//     x = Math.floor(Math.random() * 3);
// }


