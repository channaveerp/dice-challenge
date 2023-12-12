const playerOneRandomeNumber = Math.floor(Math.random() * 5) + 1;
const playerTwoRandomeNumber = Math.floor(Math.random() * 5) + 1;
const playerOnebox = document.querySelector('#box1');
const playerTwobox = document.querySelector('#box2');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player1');
const draw = document.querySelector('#draw');
const refresh = document.querySelector('#refresh');

const refrshbtn = document.getElementById('refresh');
refrshbtn.innerHTML = '<button>refresh</button>';

refrshbtn.addEventListener('click', () => {
  window.location.reload();
});

for (let i = 0; i < playerOneRandomeNumber; i++) {
  const newEelemet = document.createElement('div');
  newEelemet.classList.add('item');

  playerOnebox.appendChild(newEelemet);
}

for (let i = 0; i < playerTwoRandomeNumber; i++) {
  const newEelemet = document.createElement('div');
  newEelemet.classList.add('item');

  playerTwobox.appendChild(newEelemet);
}
console.log(playerOneRandomeNumber, playerTwoRandomeNumber);
if (playerTwoRandomeNumber == playerOneRandomeNumber) {
  draw.textContent = 'Abee loudu match is draw';
} else if (playerOneRandomeNumber > playerTwoRandomeNumber) {
  player1.textContent = 'palyer 1 is win';
} else {
  player2.textContent = 'palyer 2 is win';
}
