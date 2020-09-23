var textR = false;
var textE1 = false;
var textS1 = false;
var textO = false;
var textN1 = false;
var textA = false;
var textN2 = false;
var textC = false;
var textE2 = false;
var textS2 = false;

var scene2 = function(){
  textSize(30);
  textStyle(BOLD);
  fill(255);
  
  if(ball_down[0][0].x>150 && ball_down[0][0].x<185 && ball_up[0][0].x<185 && ball_up[0][0].x>150){
    textR = true;
  }
  if(ball_down[1][0].x>175 && ball_down[1][0].x<215 && ball_up[0][0].x<215 && ball_up[0][0].x>175){
    textE1 = true;
  }
  if(ball_down[1][0].x>158 && ball_down[1][0].x<172){
    textS1 = true;
  }
  if(ball_up[1][0].x>195 && ball_up[1][0].x<203){
    textO = true;
  }
  if(ball_up[1][0].x>158 && ball_up[1][0].x<172){
    textN1 = true;
  }
  if(ball_down[3][0].x>175 && ball_down[3][0].x<215 && ball_up[4][0].x<215 && ball_up[4][0].x>175){
    textA = true;
  }
  if(ball_down[3][0].x>150 && ball_down[3][0].x<185 && ball_up[4][0].x<185 && ball_up[4][0].x>150){
    textN2 = true;
  }
  if(ball_down[3][0].x>150 && ball_down[3][0].x<185 && ball_up[4][0].x<185 && ball_up[4][0].x>150){
    textC = true;
  }
  if(ball_down[4][0].x>150 && ball_down[4][0].x<185){
    textE2 = true;
  }
  if(ball_up[7][0].x<215 && ball_up[7][0].x>175){
    textS2 = true;
  }
  
  
  
  if(textR == true){
    text("R", 168, 32);
  }
  if(textE1 == true){
    text("É", 199, 84);
  }
  if(textS1 == true){
    text("S", 168, 135);
  }
  if(textO == true){
    text("O", 199, 185);
  }
  if(textN1 == true){
    text("N", 168, 237);
  }
  if(textA == true){
    text("A", 199, 291);
  }
  if(textN2 == true){
    text("N", 168, 340);
  }
  if(textC == true){
    text("C", 199, 390);
  }
  if(textE2 == true){
    text("E", 168, 442);
  }
  if(textS2 == true){
    text("S", 199, 495);
  }
} 