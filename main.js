let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let winSize = "width=500,height=500"

b1.addEventListener("click", openwindow);
b2.addEventListener("click", resizeWindowBy);
b3.addEventListener("click", resizeWindowTo);

function openwindow() {
    fenetre = open("", "", winSize);
}

function resizeWindowBy() {
    fenetre.resizeBy(200, 100);
}

function resizeWindowTo() {
    fenetre.resizeTo(960, 720);
}





