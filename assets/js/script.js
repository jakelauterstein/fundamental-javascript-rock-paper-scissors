let choiceArray = ['ROCK', 'PAPER', 'SCISSORS'];
let humanScore = 0;
let comScore = 0;
let i = 1;

const allBtns = document.querySelector('.choice-container')
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorBtn = document.querySelector('.scissor-btn');


const startRound = function(e) {

  let randomNum = Math.floor(Math.random() * 3);

  let comChoice = choiceArray[randomNum];
    
  console.log("computer chose " + comChoice);
    
  let playerChoice = e.target.innerText;

  console.log("player chose " + playerChoice);

  alert(`Chaos computer chose ${comChoice}, player chose ${playerChoice}`);

  if (comChoice == 'ROCK' && playerChoice == 'PAPER') {
        alert('PAPER covers ROCK, human wins round ' + (i) + '!')
        console.log('PAPER covers ROCK, human wins round ' + (i) + '!')
        humanScore +=1;
      } else if (comChoice == 'ROCK' && playerChoice == 'ROCK') {
        alert('tie round ' + (i) + '')
        console.log('tie round ' + (i) + '')
      } else if (comChoice == 'ROCK' && playerChoice == 'SCISSORS') {
        alert('com wins round ' + (i) + '!')
        console.log('com wins round ' + (i) + '!')
        comScore +=1;
      } else if (comChoice == 'SCISSORS' && playerChoice == 'SCISSORS') {
        alert('tie round ' + (i) + '!')
        console.log('tie round ' + (i) + '!')
      } else if (comChoice == 'SCISSORS' && playerChoice == 'PAPER') {
        alert('com wins round ' + (i) + '!')
        console.log('com wins round ' + (i) + '!')
        comScore +=1;
      } else if (comChoice == 'SCISSORS' && playerChoice == 'ROCK') {
        alert('human wins round ' + (i) + '!')
        console.log('human wins round ' + (i) + '!')
        humanScore +=1;
      } else if (comChoice == 'PAPER' && playerChoice == 'SCISSORS') {
        alert('human wins round ' + (i) + '!')
        console.log('human wins round ' + (i) + '!')
        humanScore +=1;
      } else if (comChoice == 'PAPER' && playerChoice == 'PAPER') {
        alert('tie round ' + (i) + '!')
      console.log('tie round ' + (i) + '!')
      } else if (comChoice == 'PAPER' && playerChoice == 'ROCK') {
        alert('com wins round ' + (i) + '!')
        console.log('com wins round ' + (i) + '!')
        comScore +=1;
      };

      i++;

      if (i <= 5) {

        window.alert(`Click the icons to make your choice for round ${i}`)

      } else if ( i = 5) {
        window.alert(`The Game Has Ended! 
        Player final score is ${humanScore} 
        and the chaos computer score is ${comScore}!`)

        if (comScore < humanScore) {
          alert("Human wins!")
          console.log("Human wins");
        } else if (humanScore < comScore) {
          alert("Com wins!")
          console.log("Chaos computer wins");
        } else {
          alert("Human and Computer tied!")
        };

        i = 1;

      };


}

allBtns.addEventListener('click', startRound);




