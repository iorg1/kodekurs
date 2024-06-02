document.addEventListener('DOMContentLoaded', (event) => {
    const gameArea = document.getElementById('spillområde');
    const ball = document.getElementById('ball');    
    ball.style.width = '30px';
    ball.style.height = '30px';
    ball.style.backgroundColor = 'red';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    ball.style.left = '50%';
    ball.style.top = '50%';
    
    let score = 0;
    const scoreDisplay = document.getElementById('score');

    ball.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
    });

    function moveBall() {
        const x = Math.floor(Math.random() * (gameArea.clientWidth - ball.clientWidth));
        const y = Math.floor(Math.random() * (gameArea.clientHeight - ball.clientHeight));
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
    }
    
    setInterval(moveBall, 4000);
});