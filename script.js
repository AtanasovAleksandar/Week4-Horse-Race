
var distance = 1250;

var horseOneSpeed
var horseTwoSpeed
var horseThreeSpeed
var horseFourSpeed
var horseFiveSpeed

var horse;
var horse1;
var horse3;
var horse4;
var horse5;

var annimation1
var annimation2
var annimation3
var annimation4
var annimation5

var pos1
var pos2
var pos3
var pos4
var pos5



function move() {
    alert('Race starting !')
    runHorse1();
    runHorse2();
    runHorse3();
    runHorse4();
    runHorse5();
}

function runHorse1() {
    horse = document.getElementById("horse-1");
    horse.src = "img/run.gif";
    pos1 = 0;
    let speed = Math.floor(Math.random() * 10);
    console.log(speed);
    horseOneSpeed = speed
    annimation1 = setInterval(move, speed);
    function move() {
        if (pos1 == distance) {
            horse.src = "img/stand.gif";
            clearInterval(annimation1);
            alert('winner is player 1');
            clearInterval(annimation2)
            horse2.src = "img/stand.gif";
            clearInterval(annimation3)
            horse3.src = "img/stand.gif";
            clearInterval(annimation4)
            horse4.src = "img/stand.gif";
            clearInterval(annimation5)
            horse5.src = "img/stand.gif";
        } else {
            pos1++;
            horse.style.left = pos1 + "px";
            if (pos1 == 400 && horseOneSpeed == 9) {
                horse.src = "img/atack.gif";
                clearInterval(annimation1)
            }
        }
    }
}


function runHorse2() {
    horse2 = document.getElementById("horse-2");
    horse2.src = "img/run.gif";
    pos2 = 0;
    let speed = Math.floor(Math.random() * 10);
    console.log(speed)
    horseTwoSpeed = speed
    annimation2 = setInterval(move, speed);
    function move() {
        if (pos2 == distance) {
            horse2.src = "img/stand.gif";
            clearInterval(annimation2);
            alert('winner is player 2')
            clearInterval(annimation1)
            horse.src = "img/stand.gif";
            clearInterval(annimation3)
            horse3.src = "img/stand.gif";
            clearInterval(annimation4)
            horse4.src = "img/stand.gif";
            clearInterval(annimation5)
            horse5.src = "img/stand.gif";
        } else {
            pos2++;
            horse2.style.left = pos2 + "px";
            if (pos2 == 400 && horseTwoSpeed == 9) {
                horse2.src = "img/atack.gif";
                clearInterval(annimation2)
            }
        }
    }
}

function runHorse3() {
    horse3 = document.getElementById("horse-3");
    horse3.src = "img/run.gif";
    pos3 = 0;
    let speed = Math.floor(Math.random() * 10);
    console.log(speed)
    horseThreeSpeed = speed
    annimation3 = setInterval(move, speed);
    function move() {
        if (pos3 == distance) {
            horse3.src = "img/stand.gif";
            clearInterval(annimation3);
            alert('winner is player 3')
            clearInterval(annimation1)
            horse.src = "img/stand.gif";
            clearInterval(annimation2)
            horse2.src = "img/stand.gif";
            clearInterval(annimation4)
            horse4.src = "img/stand.gif";
            clearInterval(annimation5)
            horse5.src = "img/stand.gif";
        } else {
            pos3++;
            horse3.style.left = pos3 + "px";
            if (pos3 == 400 && horseThreeSpeed == 9) {
                horse3.src = "img/atack.gif";
                clearInterval(annimation3)
            }
        }
    }
}


function runHorse4() {
    horse4 = document.getElementById("horse-4");
    horse4.src = "img/run.gif";
    pos4 = 0;
    let speed = Math.floor(Math.random() * 10);
    console.log(speed)
    horseFourSpeed = speed
    annimation4 = setInterval(move, speed);
    function move() {
        if (pos4 == distance) {
            horse4.src = "img/stand.gif";
            clearInterval(annimation4);
            alert('winner is player 4')
            clearInterval(annimation1)
            horse.src = "img/stand.gif";
            clearInterval(annimation2)
            horse2.src = "img/stand.gif";
            clearInterval(annimation3)
            horse3.src = "img/stand.gif";
            clearInterval(annimation5)
            horse5.src = "img/stand.gif";
        } else {
            pos4++;
            horse4.style.left = pos4 + "px";
            if (pos4 == 400 && horseFourSpeed == 9) {
                horse4.src = "img/atack.gif";
                clearInterval(annimation4)
            }
        }
    }
}

function runHorse5() {
    horse5 = document.getElementById("horse-5");
    horse5.src = "img/run.gif";
    pos5 = 0;
    let speed = Math.floor(Math.random() * 10);
    console.log(speed)
    horseFiveSpeed = speed
    annimation5 = setInterval(move, speed);
    function move() {
        if (pos5 == distance) {
            horse5.src = "img/stand.gif";
            clearInterval(annimation5);
            alert('winner is player 5')
            clearInterval(annimation1)
            horse.src = "img/stand.gif";
            clearInterval(annimation2)
            horse2.src = "img/stand.gif";
            clearInterval(annimation3)
            horse3.src = "img/stand.gif";
            clearInterval(annimation4)
            horse4.src = "img/stand.gif";
        } else {
            pos5++;
            horse5.style.left = pos5 + "px";
            if (pos5 == 400 && horseFiveSpeed == 9) {
                horse5.src = "img/atack.gif";
                clearInterval(annimation5)
            }
        }
    }
}



