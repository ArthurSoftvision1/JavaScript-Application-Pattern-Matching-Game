const gameColors = [
    "red", "blue", "green", "yellow", "pink", "lightblue", "#FF9966", "#A52A2A", "#DA1884", "#C19A6B", "#A3C1AD", "#EFBBCC", "#FFFF99",
    "#FFEF00", "#FF0800", "#E4717A", "#00BFFF", "#592720", "#C41E3A", "#00CC99", "#960018", "#D70040", "#FFA6C9", "#56A0D3", "#ED9121",
    "#00563F", "#703642", "#C95A49", "#ACE1AF", "#007BA7", "#2F847C", "#B2FFFF", "#246BCE", "#DE3163", "#007BA7", "#2A52BE", "#6D9BC3",
    "#1DACD6", "#007AA5", "#E03C31", "#F7E7CE", "#F1DDCF", "#36454F", "#232B2B", "#E68FAC", "#DFFF00", "#7FFF00", "#FFB7C5", "#954535",
    "#DE6FA1", "#A8516E", "#AA381E", "#856088", "#FFB200", "#7B3F00", "	#D2691E", "#FFA700", "#98817B", "#E34234", "#CD607E"
];
const message = document.querySelector(".message");
const gameMessage = document.querySelector(".game-message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 1;

window.addEventListener("load", setup);
button.addEventListener("click", function () {
    if (!inPlay) {
        player();
    }
})

function player() {
    button.disabled = true;
    button.style.display = "none";
    messager("Match Pattern");
    gameClicks = [];
    userClicks = [];
    runSequence(playNum);
}

function runSequence(num) {
    let squares = document.querySelectorAll(".box");
    num--;
    if (num < 0) {
        inPlay = true;
        return;
    } else {
        let randomNum = Math.floor(Math.random() * gameColors.length);
        console.log(squares[randomNum]);
        gameClicks.push(gameColors[randomNum]);
        console.log(gameClicks);
        squares[randomNum].style.opacity = "1";
        setTimeout(function () {
            squares[randomNum].style.opacity = "0.5";
            setTimeout(function () {
                runSequence(num);
            }, 100);
        }, 500);
    }
}

function setup() {
    console.log("Page loaded");
    for (let x = 0; x < gameColors.length; x++) {
        let div = eleFactory("div");
        div.style.backgroundColor = gameColors[x];
        div.classList.add("box");
        div.style.opacity = "0.5";
        div.myColor = gameColors[x];
        div.addEventListener("click", checkAnswer);
        gamearea.appendChild(div);
    }
}

function checkAnswer(e) {
    if (inPlay) {
        let el = e.target;
        userClicks.push(el.myColor);
        el.style.opacity = "1";
        setTimeout(function () {
            el.style.opacity = "0.5";
        }, 500);
        if(userClicks.length == gameClicks.length) {
            inPlay = false;
            endGame();
            let centerBtn = document.querySelector(".center");
            centerBtn.addEventListener("click", function(){
                gameMessage.innerHTML = "";
            });
        }
    }
    console.log(userClicks);
}

function messager(mes) {
    message.innerHTML = mes;
}

function endGame() {
    gameMessage.innerHTML = "Game over";
    button.disabled = false;
    button.style.display = "block";
    button.classList = "center";
    if(userClicks.toString() == gameClicks.toString()) {
        playNum++;
        messager("Nice! Try the next level = " + playNum);
    } else {
        messager("You are wrong! Try again!");
    }
}

function eleFactory(elType) {
    let ele = document.createElement(elType);
    return ele;
}
