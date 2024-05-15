document.getElementById('start-button').addEventListener('click', startGame);

let square = document.getElementById('square');
let gameContainer = document.getElementById('game-container');
let interval;

function startGame() {
    interval = setInterval(moveSquare, 1000);
    document.getElementById('start-button').disabled = true;
}

function moveSquare() {
    let containerWidth = gameContainer.offsetWidth;
    let containerHeight = gameContainer.offsetHeight;
    let squareSize = square.offsetWidth;

    let maxLeft = containerWidth - squareSize;
    let maxTop = containerHeight - squareSize;

    let randomLeft = Math.floor(Math.random() * maxLeft);
    let randomTop = Math.floor(Math.random() * maxTop);

    square.style.left = randomLeft + 'px';
    square.style.top = randomTop + 'px';
}

square.addEventListener('click', () => {
    alert('You caught me!');
    clearInterval(interval);
    document.getElementById('start-button').disabled = false;
});
