//Alpha inicial per anar reduint i fer efecte de difuminat
var trans = 255;

var scene1 = function() {

  //Crear i moure boles que pujen
  createBall(ball_up, 8, 51, 5, diferentX_Up, diferentY_Up);
  moveShowBalls(8, 51);

  //Crear i moure boles que baixen
  createBall(ball_down, 7, 51, 5, diferentX_Down, diferentY_Down);
  moveShowBalls(7, 51);
  
  
  //Renovar boles que han sortit de la pantalla
    //Boles que pujen
  for (var a = 0; a < ball_up.length; a++) {
    var positionY;
    var positionX;
    if (ball_up[a][50].x > 368) {
      if (a == 0) {
        positionY = 520 - 140;
        positionX = -140;
      } 
      else if (a == 1) {
        positionY = 520 - 65;
        positionX = -65;
      }
      else if (a == 2) {
        active2U = true;
        positionY = 520 - 65;
        positionX = -65;
      }
      else if (a == 3) {
        active3U = true;
        positionY = 520 - 65;
        positionX = -65;
      }
      else if (a == 4) {
        positionY = 520 + 10;
        positionX = 10;
      }
      else if (a == 5) {
        active5U = true;
        positionY = 520 + 10;
        positionX = 10;
      } 
      else if (a == 6) {
        active6U = true;
        positionY = 520 + 10;
        positionX = 10;
      } 
      else if (a == 7) {
        positionY = 520 + 85;
        positionX = 85;
      }
      renovateBall(ball_up, a, positionY, positionX, 51, 5);
    }
  }
  
  //Boles que baixen
  for (var b = 0; b < ball_down.length; b++) {
    var positionY_D;
    var positionX_D;
    if (ball_down[b][50].x < 0) {
      if (b == 0) {
        positionY_D = -95;
        positionX_D = 260;
      } 
      else if (b == 1) {
        positionY_D = -20;
        positionX_D = 335;
      }
      else if (b == 2) {
        active2D = true;
        positionY_D = -20;
        positionX_D = 335;
      } 
      else if (b == 3) {
        positionY_D = 55;
        positionX_D = 410;
      } 
      else if (b == 4) {
        positionY_D = 130;
        positionX_D = 485;
      } 
      else if (b == 5) {
        active5D = true;
        positionY_D = 130;
        positionX_D = 485;
      } 
      else if (b == 6) {
        positionY_D = 205;
        positionX_D = 560;
      }
      renovateBall(ball_down, b, positionY_D, positionX_D, 51, 5);
    }
  }
};