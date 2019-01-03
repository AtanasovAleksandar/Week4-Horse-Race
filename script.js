
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

var winner;
var winnerIs;
var lastWins = [{ winners: 'Player 1' }, { winners: 'Player 2' }, { winners: 'Player 3' }];
var lWins = { winners: '' }

var animation1
var animation2
var animation3
var animation4
var animation5

var pos1
var pos2
var pos3
var pos4
var pos5

function move() {
    let start = document.getElementById('first-button')
    start.style.display = 'none';

    var winnersBlock = document.getElementById('winners')
    winnersBlock.style.display = 'none'
    var timeleft = 5;
    var downloadTimer = setInterval(function () {
        timeleft--;
        var imgTimer = document.getElementById('timer')
        document.getElementById("timer").style.display = 'block';
        if (timeleft != 0) {
            imgTimer.src = "img/numb-" + timeleft + ".png";
        } else {
            clearInterval(downloadTimer);
            call();
        }
    }, 1000);


    function call() {
        runHorse1();
        runHorse2();
        runHorse3();
        runHorse4();
        runHorse5();
    }

}

function runHorse1() {
    horse = document.getElementById("horse-1");
    horse.src = "img/run.gif";
    pos1 = 0;
    let speed = Math.floor(Math.random() * 10);
    console.log(speed);
    horseOneSpeed = speed
    animation1 = setInterval(move, speed);
    function move() {
        if (pos1 == distance) {
            horse.src = "img/stand.gif";
            clearInterval(animation1);
            alert('winner is player 1');
            winnerIs = 'Player 1'
            clearInterval(animation2)
            horse2.src = "img/stand.gif";
            clearInterval(animation3)
            horse3.src = "img/stand.gif";
            clearInterval(animation4)
            horse4.src = "img/stand.gif";
            clearInterval(animation5)
            horse5.src = "img/stand.gif";
            addWinner()
        } else {
            pos1++;
            horse.style.left = pos1 + "px";
            if (pos1 == 400 && horseOneSpeed == 9) {
                horse.src = "img/attack .gif";
                clearInterval(animation1)
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
    animation2 = setInterval(move, speed);
    function move() {
        if (pos2 == distance) {
            horse2.src = "img/stand.gif";
            clearInterval(animation2);
            alert('winner is player 2')
            winnerIs = 'Player 2'
            clearInterval(animation1)
            horse.src = "img/stand.gif";
            clearInterval(animation3)
            horse3.src = "img/stand.gif";
            clearInterval(animation4)
            horse4.src = "img/stand.gif";
            clearInterval(animation5)
            horse5.src = "img/stand.gif";
            addWinner()
        } else {
            pos2++;
            horse2.style.left = pos2 + "px";
            if (pos2 == 400 && horseTwoSpeed == 9) {
                horse2.src = "img/attack .gif";
                clearInterval(animation2)
            }
        }
    }
}

function runHorse3() {
    horse3 = document.getElementById("horse-3");
    horse3.src = "img/run.gif";
    pos3 = 0;
    let speed = Math.floor(Math.random() * 17);
    console.log(speed)
    horseThreeSpeed = speed
    animation3 = setInterval(move, speed);
    function move() {
        if (pos3 == distance) {
            horse3.src = "img/stand.gif";
            clearInterval(animation3);
            alert('winner is player 3')
            winnerIs = 'Player 3'
            clearInterval(animation1)
            horse.src = "img/stand.gif";
            clearInterval(animation2)
            horse2.src = "img/stand.gif";
            clearInterval(animation4)
            horse4.src = "img/stand.gif";
            clearInterval(animation5)
            horse5.src = "img/stand.gif";
            addWinner()
        } else {
            pos3++;
            horse3.style.left = pos3 + "px";
            if (pos3 == 400 && horseThreeSpeed == 9) {
                horse3.src = "img/attack .gif";
                clearInterval(animation3)
            }
        }
    }
}

function runHorse4() {
    horse4 = document.getElementById("horse-4");
    horse4.src = "img/run.gif";
    pos4 = 0;
    let speed = Math.floor(Math.random() * 12);
    console.log(speed)
    horseFourSpeed = speed
    animation4 = setInterval(move, speed);
    function move() {
        if (pos4 == distance) {
            horse4.src = "img/stand.gif";
            clearInterval(animation4);
            alert('winner is player 4')
            winnerIs = 'Player 4'
            clearInterval(animation1)
            horse.src = "img/stand.gif";
            clearInterval(animation2)
            horse2.src = "img/stand.gif";
            clearInterval(animation3)
            horse3.src = "img/stand.gif";
            clearInterval(animation5)
            horse5.src = "img/stand.gif";
            addWinner()
        } else {
            pos4++;
            horse4.style.left = pos4 + "px";
            if (pos4 == 400 && horseFourSpeed == 9) {
                horse4.src = "img/attack .gif";
                clearInterval(animation4)
            }
        }
    }
}

function runHorse5() {
    horse5 = document.getElementById("horse-5");
    horse5.src = "img/run.gif";
    pos5 = 0;
    let speed = Math.floor(Math.random() * 15);
    console.log(speed)
    horseFiveSpeed = speed
    animation5 = setInterval(move, speed);
    function move() {
        if (pos5 == distance) {
            horse5.src = "img/stand.gif";
            clearInterval(animation5);
            alert('winner is player 5')
            winnerIs = 'Player 5'
            clearInterval(animation1)
            horse.src = "img/stand.gif";
            clearInterval(animation2)
            horse2.src = "img/stand.gif";
            clearInterval(animation3)
            horse3.src = "img/stand.gif";
            clearInterval(animation4)
            horse4.src = "img/stand.gif";
            addWinner()
        } else {
            pos5++;
            horse5.style.left = pos5 + "px";
            if (pos5 == 400 && horseFiveSpeed == 9) {
                horse5.src = "img/attack .gif";
                clearInterval(animation5)
            }
        }
    }
}

function addWinner() {
    var winnersBlock = document.getElementById('winners')
    winnersBlock.style.display = 'block'
    let win = document.getElementById('winner')
    let winnerList = win.innerHTML = "<li class='winner-winner'>" + winnerIs + "</li>"
    this.lWins.winners = winnerIs;
    console.log(this.lWins)
    winObject = Object.assign({}, this.lWins);
    this.lastWins.unshift(winObject);
    console.log(this.lastWins)

    getWinners()
}

function startAgain() {
    horse.style.left = 0;
    horse2.style.left = 0;
    horse3.style.left = 0;
    horse4.style.left = 0;
    horse5.style.left = 0;
}

function getWinners() {
    let first = lastWins[0].winners
    let second = lastWins[1].winners
    let third = lastWins[2].winners

  id1 = document.getElementById('palce-1')
  id2 = document.getElementById('palce-2')
  id3 = document.getElementById('palce-3')
    console.log(id1)
    id1.innerText = first;
    id2.innerText = second;
    id3.innerText = third;
}
