const gameColors = ["red","blue","green","yellow"];
const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 1;

window.addEventListener("load",setup);

button.addEventListener("click",function() {
    if(!inPlay) {
        player();
    }
})

function player() {
    button.disabled = true;
    gameClicks = [];
    userClicks = [];
    runSequence();
}

function runSequence() {
    inPlay = true;
}

function setup() {
    console.log("Page loaded");
    for(let x=0;x<gameColors.length;x++){
        let div = eleFactory("div");
        div.style.backgroundColor = gameColors[x];
        div.classList.add("box");
        div.style.opacity = "0.5";
        div.myColor = gameColors[x];
        div.addEventListener("click",checkAnswer);
        gamearea.appendChild(div);
    }
}

function checkAnswer(e) {
    if(inPlay) {
        let el = e.target;
        console.log(el.myColor);
        userClicks.push(el.myColor);
    }

    console.log(userClicks);
}

function eleFactory(elType) {
    let ele = document.createElement(elType);
    return ele;
}
