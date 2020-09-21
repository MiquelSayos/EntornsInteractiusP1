var ball_up = [];
var ball_down = [];

var diferentX_Up = -140;
var diferentY_Up = 380;

var diferentX_Down = 260;
var diferentY_Down = -95;

function setup() {
  pixelDensity(3);
  createCanvas(368, 520);
}

function draw() {
  background(0);
  scene1();
  scene2();
}

function mousePressed() {
    ball_up.splice(0, ball_up.length);
    ball_down.splice(0, ball_down.length);
    scene1();
    ball_up=[];
    ball_down=[];
    diferentX_Up = -140;
    diferentY_Up = 380;
    diferentY_Down = 260;
    diferentY_Down = -95;
}

function deviceShaken(){
  ball_up.splice(0, ball_up.length);
    ball_down.splice(0, ball_down.length);
    scene1();
    ball_up=[];
    ball_down=[];
    r = -140;
    t = 380;
    u = 260;
    l = -95;
}
