var ball_up = [];
var ball_down = [];

var diferentX_Up = -140;
var diferentY_Up = 380;

var diferentX_Down = 260;
var diferentY_Down = -95;

var firstOne = true;
var firstFour = true;

function setup() {
  pixelDensity(3);
  createCanvas(368, 520);
  timeStartedD2 = millis();
  timeStartedD5 = millis();
}

function draw() {
  background(0);
  scene1();
  scene2();
}

function mousePressed() {
    ball_up.splice(0, ball_up.length);
    ball_down.splice(0, ball_down.length);
    ball_up=[];
    ball_down=[];
    diferentX_Up = -140;
    diferentY_Up = 380;
    diferentY_Down = 260;
    diferentY_Down = -95;
    textR = false;
    textE1 = false;
    textS1 = false;
    textO = false;
    textN1 = false;
    textA = false;
    textN2 = false;
    textC = false;
    textE2 = false;
    textS2 = false;
    scene1();
}

function deviceShaken(){
    ball_up.splice(0, ball_up.length);
    ball_down.splice(0, ball_down.length);
    ball_up=[];
    ball_down=[];
    diferentX_Up = -140;
    diferentY_Up = 380;
    diferentY_Down = 260;
    diferentY_Down = -95;
    textR = false;
    textE1 = false;
    textS1 = false;
    textO = false;
    textN1 = false;
    textA = false;
    textN2 = false;
    textC = false;
    textE2 = false;
    textS2 = false;
    scene1();
}