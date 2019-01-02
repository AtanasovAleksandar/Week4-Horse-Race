function myMove() {
    alert('Race starting ! ')
    var horse = document.getElementById("horse-1");
    horse.src = "img/run.gif";
    var pos = 0;
    var speed = Math.floor(Math.random() * 10);
    console.log(speed)
    var run = setInterval(move, speed);
    function move() {
        if (pos == 800) {
            horse.src = "img/stand.gif";
            clearInterval(run);
            alert('winner is player 1')
        } else {
            pos++;
            horse.style.left = pos + "px";
        }
    }
}