let title = document.getElementById('word');
let score = document.getElementById('score');
let inputText = document.getElementById('inputText');
let restartBtn = document.getElementById('restartBtn');
let timer = document.getElementById('timer');

let interval = 0;
let isPlaying = false;
let random = "";
let point = 0;
let time = 30;
let keys = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "yasuo", "muay thai", "piano", "orange7", "everything goes on", "flower dance", "beautiful", "river flows in you", "winner X", "exciter","motor", "gear"];

restartBtn.addEventListener("click", game);

function game() {
    if (isPlaying) {
        restart();
    } else {
        start();
    }
    updateHTML();
    isPlaying = !isPlaying;
}

function start() {
    point = 0;
    time = 30;
    interval = setInterval(setTimer, 1000);
    randomKey();
    timer.innerHTML = "Time: " + time;
    restartBtn.innerHTML="Restart";
}

function restart(){
    random = "";
    point = 0;
    time = 30;
    clearInterval(interval);
    timer.innerHTML = "Time: " + time;
    restartBtn.innerHTML="Start";
}

function updateHTML() {
    score.innerHTML="Score: " + point;
    title.innerHTML=random;
    inputText.value="";
}

function randomKey() {
    random = keys[Math.floor(Math.random()* keys.length)];
}

inputText.addEventListener("keyup", ({key}) => {
    if (key === "Enter" && inputText.value!=="") {
        if(inputText.value===random){
            point++;
        }else{
            point--;
        }
        randomKey()
        updateHTML();
    }
})

function setTimer(){
    timer.innerHTML = "Time: " + time;
    time--;
    if (time == -1) {
        finish();
    }
}

function finish() {
    isPlaying = false;
    random = "";
    restartBtn.innerHTML="Start";
    updateHTML();
    clearInterval(interval);
}