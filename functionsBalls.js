//Frames inicials i finals per restar del comptador
var val12D = 0;
var val22D = 80;
var val15D = 0;
var val25D = 80;
var val12U = 0;
var val22U = 70;
var val13U = 0;
var val23U = 140;
var val15U = 0;
var val25U = 65;
var val16U = 0;
var val26U = 125;

//Per comprovar que han passat la quantitat de frames indicada
var active2D = true;
var active5D = true;
var active2U = true;
var active3U = true;
var active5U = true;
var active6U = true;

var createBall = function(arrayBalls, numBalls, subBalls, alphaColor, x, y) {
  if (arrayBalls.length < 1) {
    for (var i = 0; i < numBalls; i++) {
      var velocity;
      if (arrayBalls == ball_down) {
        if (i == 1 || i == 2 || i == 4 || i == 5) {
          velocity = 3;
        } else if (i == 3) {
          velocity = 1.8;
        } else {
          velocity = random(2, 3);
        }
      } else if (arrayBalls == ball_up){
        if (i == 1 ||  i == 2 || i == 3 || i == 4 || i == 5 || i == 6) {
          velocity = 3;
        } else {
          velocity = random(2,3);
        }
      }
      arrayBalls[i] = [];
      for (var z = 0; z < subBalls; z++) {
        var velocityBall = velocity - (0.02 * z);
        arrayBalls[i][z] = new Ball(x, y, velocityBall, trans);
        trans = trans - alphaColor;
      }
      trans = 255;
      if(numBalls == 8 && (i == 0 || i == 3 || i == 6)){
        x = x + 75;
        y = y + 75;
      }
      else if(numBalls == 7 && (i == 0 || i == 2 || i ==3 || i == 5)){
        x = x + 75;
        y = y + 75;
      }
      else{
        x=x;
        y=y;
      }
    }
  }
}

//Funció per moure i visualitzar les boles depenent de cada comptador i bola
var moveShowBalls = function(numBalls, subBalls) {
  for (var j = 0; j < numBalls; j++) {
    for (var c = 0; c < subBalls; c++) {
      if (numBalls == 8) {
        if(j == 2 && ball_up[j][0].x == -65){
          if((count - val12U > val22U) && active2U == true){
            active2U = false;
            val12U = count;
          }
        }
        if(j == 2 && active2U == false){
          ball_up[j][c].moveUp();
          ball_up[j][c].show();
        }
        if(j == 3 && ball_up[j][0].x == -65){
          if((count - val13U > val23U) && active3U == true){
            active3U = false;
            val13U = count;
          }
        }
        if(j == 3 && active3U == false){
          ball_up[j][c].moveUp();
          ball_up[j][c].show();
        }
        if(j == 5 && ball_up[j][0].x == 10){
          if((count - val15U > val25U) && active5U == true){
            active5U = false;
            val15U = count;
          }
        }
        if(j == 5 && active5U == false){
          ball_up[j][c].moveUp();
          ball_up[j][c].show();
        }
        if(j == 6 && ball_up[j][0].x == 10){
          if((count - val16U > val26U) && active6U == true){
            active6U = false;
            val16U = count;
          }
        }
        if(j == 6 && active6U == false){
          ball_up[j][c].moveUp();
          ball_up[j][c].show();
        }
        else if(j !=2 && j!=3 && j !=5 && j!=6)
          ball_up[j][c].moveUp();
          ball_up[j][c].show();
      } 
      else {
        if(j==2 && ball_down[j][0].x == 335){
          if((count - val12D > val22D) && active2D == true){
            active2D = false;
            val12D = count;
          }
        }
        if(j == 2 && active2D == false){
          ball_down[j][c].moveDown();
          ball_down[j][c].show();
        }
        if(j==5 && ball_down[j][0].x == 485){
          if((count - val15D > val25D) && active5D == true){
            active5D = false;
            val15D = count;
          }
        }
        if(j == 5 && active5D == false){
          ball_down[j][c].moveDown();
          ball_down[j][c].show();
        }
        else if(j !=2 && j!=5){
          ball_down[j][c].moveDown();
          ball_down[j][c].show();
        }
      }
    }
  }
}
//Funció per renovar les boles que han sortit de les posicions i crear-les a les posicions inicials que tenien
var renovateBall = function(array, ball, posY, posX, subBalls, alphaColor) {
  var velocity;
  if (array == ball_down) {
    if (ball == 1 || ball == 2 || ball == 4 || ball == 5) {
      velocity = 3;
    } else if (ball == 3) {
      velocity = 1.8;
    } else {
      velocity = random(2, 3);
    }
  } else if (array == ball_up) {
    if (ball == 1 || ball == 2 || ball == 3 || ball == 4 || ball == 5 || ball == 6) {
      velocity = 3;
    } else {
      velocity = random(2, 3);
    }
  }
  for (var k = 0; k < subBalls; k++) {
    var velocityBall = velocity - (0.02 * k);
    array[ball][k] = new Ball(posX, posY, velocityBall, trans);
    trans = trans - alphaColor;
  }
  trans = 255;
}