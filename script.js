var newGameBtn = document.getElementById('newGameBtn');
var rollDiceBtn = document.getElementById('rollDiceBtn');
var holdBtn = document.getElementById('holdBtn');
var diceImg1 = document.getElementById('diceImg1');
var diceImg2 = document.getElementById('diceImg2');
var current0 = document.getElementById('current--0')
var current1 = document.getElementById('current--1')
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')
var score0 = document.getElementById('score--0')
var score1 = document.getElementById('score--1')
var name0 = document.getElementById('name--0')
var name1 = document.getElementById('name--1')
var inputScore = document.getElementById('input-score');
var player1score = 0
var player2score = 0
var switcher = true;
var gameover = false;
var pastscore1 = 0;
var presentscore1 = 0;
var pastscore2 = 0;
var presentscore2 = 0;
var finalScore;
function checkRolls() {
    if (presentscore1 == pastscore1 && pastscore1 == 6 || presentscore1 == pastscore1 && pastscore1 == 6) {
        if (switcher) {
            switcher = false;
            score0.innerHTML = 0;
            current0.innerHTML = 0;
            player1score = 0;
            player1.classList.remove('player--active');
            player2.classList.add('player--active');
        }
        else {
            switcher = true;
            score1.innerHTML = 0;
            current1.innerHTML = 0;
            player2score = 0;
            player2.classList.remove('player--active');
            player1.classList.add('player--active');
        }
        pastscore1 = 0;
        presentscore1 = 0;
        pastscore2 = 0;
        presentscore2 = 0;
        return true;
    }
    else {
        return false;
    }

}
const resetGame = () => {
    current0.innerHTML = 0;
    score0.innerHTML = 0;
    current1.innerHTML = 0;
    score1.innerHTML = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player2.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    switcher = true;
    name0.innerHTML = 'Player 1';
    name1.innerHTML = 'Player 2';
    gameover = false;
    inputScore.value = null;
    diceImg1.style.display = 'none';
    diceImg2.style.display = 'none';
}
rollDiceBtn.addEventListener('click', () => {
    diceImg1.style.display = 'block';
    diceImg2.style.display = 'block';
    if (gameover) {
        return
    }
    // var random = Math.random();
    min = Math.ceil(1);
    max = Math.floor(7);
    var number1 = Math.floor(Math.random() * (max - min) + min);
    var number2 = Math.floor(Math.random() * (max - min) + min);
    diceImg1.src = 'dice-' + number1 + '.png';
    diceImg2.src = 'dice-' + number2 + '.png';
    presentscore1 = number1;
    presentscore2 = number2;
    checkwinner();
    if (checkRolls()) {
        return;
    }
    pastscore1 = presentscore1;
    pastscore2 = presentscore2;
    var x = parseInt(current0.innerHTML);
    var y = parseInt(current1.innerHTML);
    if (switcher) {
        if (number1 == 1 || number2 == 1) {
            player1.classList.remove('player--active');
            player2.classList.add('player--active');
            current0.innerHTML = 0;
            switcher = false;
        }
        else {
            // if (presentscore != 0)
            x += (number1 + number2);
            console.log(x);
            current0.innerHTML = x;
            if (x + player1score >= parseInt(finalScore)) {
                name0.innerHTML = 'Winner !';
                player1.classList.add('player--winner');
                gameover = true;
                return;
            }

        }
    }
    else {
        if (number1 == 1 || number2 == 1) {
            player2.classList.remove('player--active');
            player1.classList.add('player--active');
            current1.innerHTML = 0;
            switcher = true;
        }
        else {
            // if (presentscore != 0)
            y += (number1 + number2);
            current1.innerHTML = y;
            if (y + player2score >= parseInt(finalScore)) {
                name1.innerHTML = 'Winner !';
                player2.classList.add('player--winner');
                gameover = true;
                return;
            }
        }
    }
    // console.log(object);

})
function checkwinner() {
    if (inputScore.value) {
        finalScore = parseInt(inputScore.value);
    }
    else {
        finalScore = 100;
    }
}
newGameBtn.addEventListener('click', resetGame)


holdBtn.addEventListener('click', () => {
    if (gameover) {
        return
    }
    if (switcher) {
        player1score += parseInt(current0.innerHTML);
        score0.innerHTML = player1score;
        switcher = false;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        current0.innerHTML = 0;
    }
    else {
        player2score += parseInt(current1.innerHTML);
        score1.innerHTML = player2score;
        switcher = true;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        current1.innerHTML = 0;
    }
    pastscore1 = 0;
    presentscore1 = 0;
    pastscore2 = 0;
    presentscore2 = 0;
    diceImg1.style.display = 'none';
    diceImg2.style.display = 'none';
})
console.log(checkRolls());
