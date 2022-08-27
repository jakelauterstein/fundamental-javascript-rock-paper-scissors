let choiceArray = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let comScore = 0;


let fiveRoundGame = function() {

  // for (let i = 0; i < 5; i++)

  // {

    let randomNum = Math.floor(Math.random() * 3);



    let getComputerChoice = function() {

      computerChoice = choiceArray[randomNum];

      console.log("computer chose " + computerChoice);

      getPlayerChoice(computerChoice)

    }

    let getPlayerChoice = function(comChoice) {

      playerNumChoice = parseInt(prompt('Welcometo Rock Paper Scissors! Please enter 0 to choose Rock, 1 to choose paper, and 2 to choose scissors!'));

      playerChoice = choiceArray[playerNumChoice];

      console.log("player chose " + playerChoice)

      gamePlay(comChoice, playerChoice)

    }


    function gamePlay(computerChoice, playerChoice) {

      

      if (computerChoice == 'rock' && playerChoice == 'paper') {
        alert('paper covers rock, human wins round ' + (i+1) + '!')
        console.log('paper covers rock, human wins round ' + (i+1) + '!')
        humanScore +=1;
      } else if (computerChoice == 'rock' && playerChoice == 'rock') {
        alert('tie round ' + (i+1) + '')
        console.log('tie round ' + (i+1) + '')
      } else if (computerChoice == 'rock' && playerChoice == 'scissors') {
        alert('com wins round ' + (i+1) + '!')
        console.log('com wins round ' + (i+1) + '!')
        comScore +=1;
      } else if (computerChoice == 'scissors' && playerChoice == 'scissors') {
        alert('tie round ' + (i+1) + '!')
        console.log('tie round ' + (i+1) + '!')
      } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        alert('com wins round ' + (i+1) + '!')
        console.log('com wins round ' + (i+1) + '!')
        comScore +=1;
      } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
        alert('human wins round ' + (i+1) + '!')
        console.log('human wins round ' + (i+1) + '!')
        humanScore +=1;
      } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
        alert('human wins round ' + (i+1) + '!')
        console.log('human wins round ' + (i+1) + '!')
        humanScore +=1;
      } else if (computerChoice == 'paper' && playerChoice == 'paper') {
        alert('tie round ' + (i+1) + '!')
      console.log('tie round ' + (i+1) + '!')
      } else if (computerChoice == 'paper' && playerChoice == 'rock') {
        alert('com wins round ' + (i+1) + '!')
        console.log('com wins round ' + (i+1) + '!')
        comScore +=1;
      }

      

    // }

    getComputerChoice();

  }

  if (comScore < humanScore) {
    alert("Human wins!")
    console.log("Human wins");
  } else if (humanScore < comScore) {
    alert("Com wins!")
    console.log("Com wins");
  } else {
    alert("Human and Com tied!")
  };

}

fiveRoundGame();
