const gameColors = ["red","blue","green","yellow"];
const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");

button.addEventListener("click",function() {
    console.log("works");
});

window.addEventListener("load",setup);

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
    let el = e.target;
    console.log(el.myColor);
}

function eleFactory(elType) {
    let ele = document.createElement(elType);
    return ele;
}
