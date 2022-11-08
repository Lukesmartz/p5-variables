var firstName = 'Luke';
var thisIsAStrig= 'Hello';
var thisIsAnInteger=100;
var thisIsAnUndefinedVar;
var thisIsNull = null;

var ellipseX = 200;
var ellipsey = 400;
function setup() {
    var canvas = createCanvas(600 , 600);
    canvas.parent("p5container");
    console.log(firstName);
    background(220);
}



function draw() {
    

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 100);

    console.log(width, height);
}