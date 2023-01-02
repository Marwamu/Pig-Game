var newGameBtn = document.getElementById('newGameBtn');
var rollDiceBtn = document.getElementById('rollDiceBtn');
var holdBtn = document.getElementById('holdBtn');
var diceImg = document.getElementById('diceImg');
var current0 = document.getElementById('current--0')
var current1 = document.getElementById('current--1')
var switcher = true;
rollDiceBtn.addEventListener('click', () => {
    // var random = Math.random();
    min = Math.ceil(1);
    max = Math.floor(6);
    var number = Math.floor(Math.random() * (max - min) + min);
    diceImg.src = 'dice-' + number + '.png';
    var x = parseInt(current0.innerHTML);
    var y = parseInt(current1.innerHTML);
    if (switcher) {
        if (number == 1) {
            current0.innerHTML = 0;
            switcher = false;
        }
        else {
            x += number;
            current0.innerHTML = x;
        }
    }
    else {
        if (number == 1) {
            current1.innerHTML = 0;
            switcher = true;
        }
        else {
            y += number;
            current1.innerHTML = y;
        }
    }
    // console.log(object);

})
newGameBtn.addEventListener('click', () => {

})
holdBtn.addEventListener('click', () => {
    
})