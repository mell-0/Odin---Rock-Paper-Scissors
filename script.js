console.log("Hello from script");

// initalizing computer and human scores
let compScore = userScore = round = 0;

// selecting elements to display resutls
let roundElement = document.querySelector("#round");
let userS = document.querySelector("#userScore");
let compS = document.querySelector("#compScore");
let resutls = document.querySelector("#resultBoard");

let winner = '';

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
let getHumanChoice = () => 
{
    return (prompt("enter rock, paper, or scissors", "rock")); // prompt gets input as a string
}


/*
    playRound method
*/
function playRound(humanChoice, computerChoice)
{
    // making humanChoice case insensitive
    humanChoice = String(humanChoice).toLocaleLowerCase();

    let resultStr = `You picked: ${humanChoice}<br>Computer picked: ${computerChoice}`;
    resutls.innerHTML = resultStr;

    console.log(`You picked: ${humanChoice}`);
    console.log(`Computer picked: ${computerChoice}`);

    let otherStr = ''; // used to store the other scenarios

    if (humanChoice === computerChoice)
    {
        console.log("Tie! Both got " + humanChoice);
        resutls.innerHTML += "<br>Tie! Both got " + humanChoice;
    }
    else
    { // not the same
        
        if (humanChoice === "scissors")
        {
            if (computerChoice === "paper")
            {
                console.log('You win! scissors beats paper');
                userScore++;
                otherStr = 'You win! scissors beats paper';
            }
            else 
            { // if computer got rock
                console.log('You loose! rock beats scissors');
                compScore++;
                otherStr = 'You loose! rock beats scissors';
            }
        }
        else if (humanChoice === "rock")
        {
            if (computerChoice === "paper")
            {
                console.log('You loose! paper beats rock');
                compScore++;
                otherStr = 'You loose! paper beats rock';
            }
            else
            { // if computer got scissors
                console.log('You win! rock beats scissors');
                userScore++;
                otherStr = 'You win! rock beats scissors';
            }
        }
        else
        { // if human got paper, defult choice is paper
            if (computerChoice === "scissors")
            {
                console.log('You loose! scissors beats paper');
                compScore++;
                otherStr = 'You loose! scissors beats paper';
            }
            else
            { // if computer got rock
                console.log('You win! paper beats rock');
                userScore++;
                otherStr = 'You win! paper beats rock';
            }
        }

        resutls.innerHTML += '<br>' + otherStr;
    }
}


/**
 * Step 2.2: adding event listeners to the 3 buttons
 */ 
let btnContainer = document.querySelector('#btnContainer');

btnContainer.addEventListener('click', (e) =>
{
    let target = e.target.innerText; // get the text of the button so I can use it to compair
        
    console.log(target);
    playRound(target, getComputerChoice());
    playGame();
    
});

// this version has no loop
function playGame()
{
    console.log(`\nRound ${++round}`);
    roundElement.textContent = round;
    
    //playRound(getHumanChoice(), getComputerChoice());
    console.log(`User score: ${userScore}\nComputer score: ${compScore}` + '\n');
    userS.textContent = userScore;
    compS.textContent = compScore;
    
    if (round === 5)
    {
        console.log(`\nFinal score\nUser score: ${userScore}\nComputer score: ${compScore}`);
        
        if (userScore === compScore)
        {
            console.log("Tie!"); 
            winner = "Tie!";
        }
            
        else if (userScore > compScore)   
        {
            console.log("User won!");
            winner = "User won!";
        }
        else
        {
            console.log("Computer won!");
            winner = "Computer won!";
        }
            
        resutls.innerHTML += '<br><br>' + winner;
        round = userScore = compScore = 0; // restarting values
    }
    
}

// function playGame()
// {
//     for(let i=1; i<=1; i++) // changed to 1 round
//     {
//         console.log(`\nRound ${i}`);
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log(`User score: ${userScore}\nComputer score: ${compScore}`);
//     }

//     console.log(`\nFinal score\nUser score: ${userScore}\nComputer score: ${compScore}`);
    
//     if (userScore === compScore)
//         console.log("Tie!");
//     else if (userScore > compScore)
//         console.log("User won!");
//     else
//         console.log("Computer won!");
// }


// code for button
// let startButton = document.getElementById("start");

// startButton.addEventListener("click", startFun);

// function startFun(){
//     console.log("Begin!");
//     playGame();
// }


/**
 * Notes:
 * - User starts the game by pressing one of the 3 buttons
 * - Each round, when a button is clicked, display the round, choices, points, & the winner of the round
 * - At the 5th round, display who won with points in addition to what's displayed each round
 * - After 5th round, reset
 */
