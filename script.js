
function move() {
    alert('Race starting !')
    runHorse1();
    runHorse2();
    runHorse3();
    runHorse4();
}

function runHorse1() {
    var horse = document.getElementById("horse-1");
    horse.src = "img/run.gif";
    var pos = 0;
    var speed = Math.floor(Math.random() * 10);
    console.log(speed);
    var run = setInterval(move, speed);
    function move() {
        if (pos == 800) {
            horse.src = "img/stand.gif";
            clearInterval(run);
            alert('winner is player 1');
        } else {
            pos++;
            horse.style.left = pos + "px";
        }
    }
}


function runHorse2() {
    var horse2 = document.getElementById("horse-2");
    horse2.src = "img/run.gif";
    var pos = 0;
    var speed = Math.floor(Math.random() * 10);
    console.log(speed)
    var run = setInterval(move, speed);
    function move() {
        if (pos == 800) {
            horse2.src = "img/stand.gif";
            clearInterval(run);
            alert('winner is player 2')
        } else {
            pos++;
            horse2.style.left = pos + "px";
        }
    }
}

function runHorse3() {
    var horse3 = document.getElementById("horse-3");
    horse3.src = "img/run.gif";
    var pos = 0;
    var speed = Math.floor(Math.random() * 10);
    console.log(speed)
    var run = setInterval(move, speed);
    function move() {
        if (pos == 800) {
            horse3.src = "img/stand.gif";
            clearInterval(run);
            alert('winner is player 3')
        } else {
            pos++;
            horse3.style.left = pos + "px";
        }
    }
}


function runHorse4() {
    var horse4 = document.getElementById("horse-4");
    horse4.src = "img/run.gif";
    var pos = 0;
    var speed = Math.floor(Math.random() * 10);
    console.log(speed)
    var run = setInterval(move, speed);
    function move() {
        if (pos == 800) {
            horse4.src = "img/stand.gif";
            clearInterval(run);
            alert('winner is player 4')
        } else {
            pos++;
            horse4.style.left = pos + "px";
        }
    }
}


