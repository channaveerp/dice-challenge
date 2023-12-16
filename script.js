// const playerOneRandomeNumber = Math.floor(Math.random() * 5) + 1;
// const playerTwoRandomeNumber = Math.floor(Math.random() * 5) + 1;
// const playerOnebox = document.querySelector('#box1');
// const playerTwobox = document.querySelector('#box2');
// const player1 = document.querySelector('#player1');
// const player2 = document.querySelector('#player1');
// const draw = document.querySelector('#draw');
// const refresh = document.querySelector('#refresh');

// const refrshbtn = document.getElementById('refresh');
// refrshbtn.innerHTML = '<button>refresh</button>';

// refrshbtn.addEventListener('click', () => {
//   window.location.reload();
// });

// for (let i = 0; i < playerOneRandomeNumber; i++) {
//   const newEelemet = document.createElement('div');
//   newEelemet.classList.add('item');

//   playerOnebox.appendChild(newEelemet);
// }

// for (let i = 0; i < playerTwoRandomeNumber; i++) {
//   const newEelemet = document.createElement('div');
//   newEelemet.classList.add('item');

//   playerTwobox.appendChild(newEelemet);
// }
// console.log(playerOneRandomeNumber, playerTwoRandomeNumber);
// if (playerTwoRandomeNumber == playerOneRandomeNumber) {
//   draw.textContent = 'Abee loudu match is draw';
// } else if (playerOneRandomeNumber > playerTwoRandomeNumber) {
//   player1.textContent = 'palyer 1 is win';
// } else {
//   player2.textContent = 'palyer 2 is win';
// }

// // create random number img1
var randomNumberImg1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberImg1);

// get img 1
var img1 = document.querySelectorAll('img')[0];
console.log(img1);
// chnage src of img1
var chnageRandomImgrsc = 'images/' + 'dice' + randomNumberImg1 + '.png';
// change attributes of img1
var chageAttribute = img1.setAttribute('src', chnageRandomImgrsc);

// for im 2
var random2 = Math.floor(Math.random() * 6) + 1;
console.log(random2);
var imagechage = 'images/' + 'dice' + random2 + '.png';
var chnagessrscimg2 = document.querySelectorAll('img')[1];
var setS = chnagessrscimg2.setAttribute('src', imagechage);

if (random2 === randomNumberImg1) {
  document.querySelector('h1').innerHTML = '🚩 match is draw';
} else if (random2 < randomNumberImg1) {
  document.querySelector('h1').innerHTML = ' 🚩 Palyer 1 win';
} else {
  document.querySelector('h1').innerHTML = '🚩 Player 2 win';
}
