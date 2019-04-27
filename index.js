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
    for(let x=0;x<gameColors.length;x++) {
        let div = eleFactory("div");
        div.style.backgroundColor = gameColors[x];
        div.classList.add("box");
        gamearea.appendChild(div);
    }
}

function eleFactory(elType) {
    let ele = document.createElement(elType);
    return ele;
}
