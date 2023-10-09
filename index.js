let text = document.getElementById("text");
let cloud1 = document.getElementById("cloud1");
let cloud2 = document.getElementById("cloud2");
let mountainLayer1 = document.getElementById("mountainLayer1");
let mountainLayer2 = document.getElementById("mountainLayer2");
let mountainLayer3 = document.getElementById("mountainLayer3");
let mountainLayer4 = document.getElementById("mountainLayer4");
let treeLayer1 = document.getElementById("treeLayer1");
let bird = document.getElementById("bird");
let quote = document.getElementById("quote");

window.addEventListener('scroll',() => {
    let value = (window.scrollY)/2;
    text.style.marginBottom = value * 2.5 + 'px';
    quote.style.paddingTop = value * 0.6 + 'px';
    cloud1.style.left = value * -1.5 + 'px';
    cloud2.style.left = value * 1.8 + 'px';
    mountainLayer1.style.left = value * 0.01 + 'px';
    mountainLayer1.style.bottom = value * -0.51 + 'px';
    mountainLayer2.style.bottom = value * -0.51 + 'px';
    mountainLayer3.style.bottom = value * -0.61 + 'px';
    mountainLayer2.style.left = value * -0.25 + 'px';
    mountainLayer3.style.left = value * -0.3 + 'px';
    mountainLayer4.style.left = value * 0.35 + 'px';
    treeLayer1.style.right = value * 1.5 + 'px';
    bird.style.right = value* -2.5 + "px";
});