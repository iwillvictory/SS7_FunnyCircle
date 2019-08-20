
let ctx= document.getElementById("myCanvas").getContext("2d");
function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
} document.getElementById("myCanvas").getContext("2d");
function createCircle1(){
    let circle= new Circle(500, 500, 80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}
function createCircle2(){
    let radius = Math.floor(Math.random() * 80);
    let circle= new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle3(){
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let circle= new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createCircle4(){
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
function createMultipleCircle(){
    for(let i = 0; i < 30; i++){
        createCircle4();
    }
    setTimeout(createMultipleCircle,1000);
}
