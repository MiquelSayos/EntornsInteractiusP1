//Arrays de boles
var ball_up = [];
var ball_down = [];

//Posicions inicials
var diferentX_Up = -140;
var diferentY_Up = 380;
var diferentX_Down = 260;
var diferentY_Down = -95;

//Comptador
var count = 0;

//Valor canviant
var valorRGB = 255;

function preload() {
  fontBold = loadFont('Raleway-ExtraBold.ttf');
  fontSemi = loadFont('Raleway-Bold.ttf');
}

function setup() {
  createCanvas(368, 520);
}

function draw() {
  background(0);
  scene1();
  scene2();
  scene3();
  //Comptador
  count++;
}
function touchMoved(){
  valorRGB = valorRGB + 5;
  if(valorRGB > 255){
    valorRGB = 0;
  }
}

function mousePressed() {
  //Borrar boles i crear arrays
  ball_up.splice(0, ball_up.length);
  ball_down.splice(0, ball_down.length);
  ball_up = [];
  ball_down = [];
  //Tornar les posicions inicials
  diferentX_Up = -140;
  diferentY_Up = 380;
  diferentY_Down = 260;
  diferentY_Down = -95;
  //Tornar a controlar els frames si estan actius
  active2D = true;
  active5D = true;
  active2U = true;
  active3U = true;
  active5U = true;
  active6U = true;
  //Treure els texts
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
  //Tornar les paraules a la seva posició inicial
  i = -55;
  j = 423;
  //Tornar al color inicial
  valorRGB = 255;
  //Activar de nou tot
  scene1();
  scene2();
  scene3();
}

function deviceShaken() {
  //Borrar boles i crear arrays
  ball_up.splice(0, ball_up.length);
  ball_down.splice(0, ball_down.length);
  ball_up = [];
  ball_down = [];
  //Tornar les posicions inicials
  diferentX_Up = -140;
  diferentY_Up = 380;
  diferentY_Down = 260;
  diferentY_Down = -95;
  //Tornar a controlar els frames si estan actius
  active2D = true;
  active5D = true;
  active2U = true;
  active3U = true;
  active5U = true;
  active6U = true;
  //Treure els texts
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
  //Tornar les paraules a la seva posició inicial
  i = -55;
  j = 423;
  //Tornar al color inicial
  valorRGB = 255;
  //Activar de nou tot
  scene1();
  scene2();
  scene3();
}