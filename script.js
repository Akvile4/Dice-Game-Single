const playAgain = document.getElementById('play-again');
const score = document.getElementById('score');
const image = document.getElementById('image');
const roll = document.getElementById('roll');

let currentScore = 0;


roll.addEventListener('click', () => {
    roll.textContent = 'ROLL'
    let currentRoll = Math.ceil(Math.random() * 6);
    currentScore += currentRoll;
    score.textContent = currentScore;
    image.src = `./images/${currentRoll}.png`;
    if (currentScore >= 20) {
        score.textContent = `YOU HAVE WON WITH A SCORE OF ${currentScore}!!!`;
        currentScore = 0;
        roll.textContent = 'Play again?'
    } else {
        if (currentRoll == 1) {
            score.textContent = `YOU LOST...`;
            currentScore = 0;
            roll.textContent = 'Play Again?'
        }     
    }       
    // if (roll.textContent == 'Play Again?') {
    //             image.src = '';
    //             score.textContent = 'Lets play again';
    //             roll.textContent = 'ROLL';
    // }
});

