var x=document.getElementById("box")
x.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    x.style.backgroundColor = randomColor;
});
var y=document.getElementById("box1")
y.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    y.style.backgroundColor = randomColor;
});
var z=document.getElementById("box2")
z.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    z.style.backgroundColor = randomColor;
});
var a=document.getElementById("box3")
a.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    a.style.backgroundColor = randomColor;
});
var b=document.getElementById("box4")
b.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    b.style.backgroundColor = randomColor;
});
var c=document.getElementById("box5")
c.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    c.style.backgroundColor = randomColor;
});
var d=document.getElementById("box6")
d.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    d.style.backgroundColor = randomColor;
});
var e=document.getElementById("box7")
e.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    e.style.backgroundColor = randomColor;
});
var f=document.getElementById("box8")
f.addEventListener("mouseover", () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    f.style.backgroundColor = randomColor;
});

var reset=document.getElementById("reset")
reset.addEventListener("click",() =>{
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white";
    c.style.backgroundColor = "white";
    d.style.backgroundColor = "white";
    e.style.backgroundColor = "white";
    f.style.backgroundColor = "white";
    x.style.backgroundColor = "white";
    y.style.backgroundColor = "white";
    z.style.backgroundColor = "white";
});