
const form = document.querySelector('form');

const submitHandler = function (event) {
  event.preventDefault();


  const rpsChoice = form.rps.value;
  const rps = ['rock','paper','scissors']
  const rpsRandom = rps[Math.floor(Math.random() * (rps.length))];
  let rpsRandomChoice = `The computer chooses ${rpsRandom}`
  console.log (rpsRandomChoice);

  if (rpsChoice === 'rock'){
    if (rpsRandom === 'scissors'){
      form.output.value = `Player wins! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Player wins! (${rpsChoice} vs ${rpsRandom})`)
    } else if (rpsRandom === 'rock') {
      form.output.value = `Draw! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Draw!(${rpsChoice} vs ${rpsRandom})`)
    } else {
      form.output.value = `Player Lost! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Player Lost ((${rpsChoice} vs ${rpsRandom}))`)
    }
  }
  if (rpsChoice === 'paper'){
    if (rpsRandom === 'rock'){
      form.output.value = `Player wins! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Player wins! (${rpsChoice} vs ${rpsRandom})`)
    } else if (rpsRandom === 'paper') {
      form.output.value = `Draw! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Draw!(${rpsChoice} vs ${rpsRandom})`)
    } else {
      form.output.value = `Player Lost! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Player Lost ((${rpsChoice} vs ${rpsRandom}))`)
    }
  }
  if (rpsChoice === 'scissors'){
    if (rpsRandom === 'paper'){
      form.output.value = `Player wins! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Player wins! (${rpsChoice} vs ${rpsRandom})`)
    } else if (rpsRandom === 'scissors') {
      form.output.value = `Draw! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Draw!(${rpsChoice} vs ${rpsRandom})`)
    } else {
      form.output.value = `Player Lost! (Player's choice: ${rpsChoice} vs Computer's choice: ${rpsRandom})`;
      console.log (`Player Lost ((${rpsChoice} vs ${rpsRandom}))`)
    }
  }
}
form.addEventListener ('submit',submitHandler);

