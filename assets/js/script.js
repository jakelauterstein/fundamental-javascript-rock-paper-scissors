let choiceArray = ['ROCK', 'PAPER', 'SCISSORS'];
let humanScore = 0;
let comScore = 0;

const allBtns = document.querySelector('.choice-container')
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorBtn = document.querySelector('.scissor-btn');


const startRound = function(e) {

  for (let i = 0; i < 5; i++) {

  let randomNum = Math.floor(Math.random() * 3);

  let computerChoice = choiceArray[randomNum];
    
  console.log("computer chose " + computerChoice);
    
  let playerChoice = e.target.innerText;

  console.log("player chose " + playerChoice);

  const gamePlay = function(playerChoice, comChoice) {

  if (comChoice == 'ROCK' && playerChoice == 'PAPER') {

            alert('PAPER covers ROCK, human wins round ' + (i+1) + '!')
            console.log('PAPER covers ROCK, human wins round ' + (i+1) + '!')
            humanScore +=1;
          } else if (comChoice == 'ROCK' && playerChoice == 'ROCK') {
            alert('tie round ' + (i+1) + '')
            console.log('tie round ' + (i+1) + '')
          } else if (comChoice == 'ROCK' && playerChoice == 'SCISSORS') {
            alert('com wins round ' + (i+1) + '!')
            console.log('com wins round ' + (i+1) + '!')
            comScore +=1;
          } else if (comChoice == 'SCISSORS' && playerChoice == 'SCISSORS') {
            alert('tie round ' + (i+1) + '!')
            console.log('tie round ' + (i+1) + '!')
          } else if (comChoice == 'SCISSORS' && playerChoice == 'PAPER') {
            alert('com wins round ' + (i+1) + '!')
            console.log('com wins round ' + (i+1) + '!')
            comScore +=1;
          } else if (comChoice == 'SCISSORS' && playerChoice == 'ROCK') {
            alert('human wins round ' + (i+1) + '!')
            console.log('human wins round ' + (i+1) + '!')
            humanScore +=1;
          } else if (comChoice == 'PAPER' && playerChoice == 'SCISSORS') {
            alert('human wins round ' + (i+1) + '!')
            console.log('human wins round ' + (i+1) + '!')
            humanScore +=1;
          } else if (comChoice == 'PAPER' && playerChoice == 'PAPER') {
            alert('tie round ' + (i+1) + '!')
          console.log('tie round ' + (i+1) + '!')
          } else if (comChoice == 'PAPER' && playerChoice == 'ROCK') {
            alert('com wins round ' + (i+1) + '!')
            console.log('com wins round ' + (i+1) + '!')
            comScore +=1;
          }
    
          
    
         }

         gamePlay(playerChoice, computerChoice);
  }

}



allBtns.addEventListener('click', startRound);




// let fiveRoundGame = function(e) {

//   // for (let i = 0; i < 5; i++)

//   // {

//     let randomNum = Math.floor(Math.random() * 3);


//     let getComputerChoice = function() {

//       computerChoice = choiceArray[randomNum];

//       console.log("computer chose " + computerChoice);

//       getPlayerChoice(computerChoice)

//     }

//     let getPlayerChoice = function(comChoice) {

//       let playerChoice = e.target.value;

//       console.log("player chose " + playerChoice)

//       gamePlay(comChoice, playerChoice)

//     }


//     function gamePlay(computerChoice, playerChoice) {

      

//       if (computerChoice == 'rock' && playerChoice == 'paper') {
//         alert('paper covers rock, human wins round ' + (i+1) + '!')
//         console.log('paper covers rock, human wins round ' + (i+1) + '!')
//         humanScore +=1;
//       } else if (computerChoice == 'rock' && playerChoice == 'rock') {
//         alert('tie round ' + (i+1) + '')
//         console.log('tie round ' + (i+1) + '')
//       } else if (computerChoice == 'rock' && playerChoice == 'scissors') {
//         alert('com wins round ' + (i+1) + '!')
//         console.log('com wins round ' + (i+1) + '!')
//         comScore +=1;
//       } else if (computerChoice == 'scissors' && playerChoice == 'scissors') {
//         alert('tie round ' + (i+1) + '!')
//         console.log('tie round ' + (i+1) + '!')
//       } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
//         alert('com wins round ' + (i+1) + '!')
//         console.log('com wins round ' + (i+1) + '!')
//         comScore +=1;
//       } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
//         alert('human wins round ' + (i+1) + '!')
//         console.log('human wins round ' + (i+1) + '!')
//         humanScore +=1;
//       } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
//         alert('human wins round ' + (i+1) + '!')
//         console.log('human wins round ' + (i+1) + '!')
//         humanScore +=1;
//       } else if (computerChoice == 'paper' && playerChoice == 'paper') {
//         alert('tie round ' + (i+1) + '!')
//       console.log('tie round ' + (i+1) + '!')
//       } else if (computerChoice == 'paper' && playerChoice == 'rock') {
//         alert('com wins round ' + (i+1) + '!')
//         console.log('com wins round ' + (i+1) + '!')
//         comScore +=1;
//       }

      

//     // }

//     getComputerChoice();

//   }

//   if (comScore < humanScore) {
//     alert("Human wins!")
//     console.log("Human wins");
//   } else if (humanScore < comScore) {
//     alert("Com wins!")
//     console.log("Com wins");
//   } else {
//     alert("Human and Com tied!")
//   };

// }

