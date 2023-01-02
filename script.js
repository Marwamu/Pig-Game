var newGameBtn = document.getElementById('newGameBtn');
var rollDiceBtn = document.getElementById('rollDiceBtn');
var holdBtn = document.getElementById('holdBtn');
var diceImg = document.getElementById('diceImg');
var current0 = document.getElementById('current--0')
var current1 = document.getElementById('current--1')
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')
var score0 = document.getElementById('score--0')
var score1 = document.getElementById('score--1')
var name0 = document.getElementById('name--0')
var name1 = document.getElementById('name--1')
var player1score = 0
var player2score = 0
var switcher = true;
var gameover = false;
const resetGame = () => {
    current0.innerHTML = 0;
    score0.innerHTML = 0;
    current1.innerHTML = 0;
    score1.innerHTML = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    switcher = true;
    name0.innerHTML = 'Player 1';
    name1.innerHTML = 'Player 2';
    gameover = false;
}
rollDiceBtn.addEventListener('click', () => {
    if (gameover) {
        return
    }
    // var random = Math.random();
    min = Math.ceil(1);
    max = Math.floor(6);
    var number = Math.floor(Math.random() * (max - min) + min);
    diceImg.src = 'dice-' + number + '.png';
    var x = parseInt(current0.innerHTML);
    var y = parseInt(current1.innerHTML);
    if (switcher) {
        if (number == 1) {
            player1.classList.remove('player--active');
            player2.classList.add('player--active');
            current0.innerHTML = 0;
            switcher = false;
        }
        else {
            x += number;
            current0.innerHTML = x;
            if (x + player1score >= 100) {
                name0.innerHTML = 'Winner !';
                player1.classList.add('player--winner');
                gameover = true;
                return;
            }

        }
    }
    else {
        if (number == 1) {
            player2.classList.remove('player--active');
            player1.classList.add('player--active');
            current1.innerHTML = 0;
            switcher = true;
        }
        else {
            y += number;
            current1.innerHTML = y;
            if (y + player2score >= 100) {
                name1.innerHTML = 'Winner !';
                player2.classList.add('player--winner');
                gameover = true;
                return;
            }
        }
    }
    // console.log(object);

})
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

})
