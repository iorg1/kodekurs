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
    
    
    ball.addEventListener('click', () => {
        alert('Ball clicked!');
    });
});