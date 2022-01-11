// 'use strict';

// let val = document.querySelector('.number');
// val.textContent = "23"

// // document.querySelector('.score').textContent = '10';
// console.log(document.getElementsByClassName('score')[0]);
// document.getElementsByClassName('score')[0].textContent = '10';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
let guess ;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    console.log('score',score);
    console.log('highScore',highScore);
    guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        score--;
        document.querySelector('.score').textContent = score;
        console.log('empty number')
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "guessed right";
        document.querySelector('.number').style.width = '30rem'; 
        document.querySelector('body').style.backgroundColor= 'rgb(18, 161, 42)';
        document.querySelector('.number').textContent = secretNumber;
        if(score>highScore){
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "too high"
        }else{
            document.querySelector('.score').textContent = '0';
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "too low"
        }else{
            document.querySelector('.score').textContent = '0';
        }
    }
})
document.querySelector('.again').addEventListener('click',()=>{
    document.querySelector('.score').textContent = '20';
    secretNumber = Math.trunc(Math.random()*20) + 1;
    guess = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'; 
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = "Start Guessing...";
})

// asd.classList.add('a','b');
// console.log(asd.classList);
// asd.classList.remove('b');
// console.log(asd.classList);



