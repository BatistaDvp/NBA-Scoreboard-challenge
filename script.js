//VARIABLES
let scoreHome = 0;
let scoreAway = 0;
let min = 10;
let sec = 60;
let tempo = 1000; // ms to sec
let cron = null;
let quart = 1;

//DOC.SELECT

let scoreLeft = document.querySelector(".teamScoreLeft");
let scoreRight = document.querySelector(".teamScoreRight");
let mais1 = document.querySelector(".one-Left");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let timer = document.querySelector(".time");
let quarter = document.querySelector(".quarterTime");

//LEFT SCORE

function pointsLeft1() {
  scoreHome += 1;
  scoreLeft.textContent = scoreHome;
}

function pointsLeft2() {
  scoreHome += 2;
  scoreLeft.textContent = scoreHome;
}

function pointsLeft3() {
  scoreHome += 3;
  scoreLeft.textContent = scoreHome;
}

//RIGHT SCORE
function pointsRight1() {
  scoreAway += 1;
  scoreRight.textContent = scoreAway;
}

function pointsRight2() {
  scoreAway += 2;
  scoreRight.textContent = scoreAway;
}

function pointsRight3() {
  scoreAway += 3;
  scoreRight.textContent = scoreAway;
}

//TIMER
function start() {
  if (cron === null) {
    cron = setInterval(runTimer, tempo);
  }
}
function pausar() {
  if (cron !== null) {
    clearInterval(cron);
    cron = null;
  }
}

function restart() {
  clearInterval(cron);
  min = 10;
  sec = 60;
  cron = null;
  quart = 1;

  timer.innerText = "10:00";
  scoreLeft.textContent = 0;
  scoreRight.textContent = 0;
  quarter.textContent = quart;
}

function runTimer() {
  if (sec === 0) {
    if (min === 0) {
      quart++;
      min = 10;
      sec = 0;
      if (quart > 4) {
        pausar();
        return;
      }
      quarter.innerText = quart;
      return;
    } else {
      min--;
      sec = 59;
    }
  } else {
    sec--;
  }

  let format =
    (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);

  timer.innerText = format;
}
