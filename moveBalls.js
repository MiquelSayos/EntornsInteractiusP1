var trans = 255;

var scene1 = function(){
  //Creació boles que pujen 
  createBall(ball_up, 4, 51, 15, diferentX_Up, diferentY_Up);
  moveShowBalls(4, 51);
  
  //Creació boles que baixen
  createBall(ball_down, 5, 51, 15, diferentX_Down, diferentY_Down);
  moveShowBalls(5, 51);
  
  //Renovar boles que han sortit de la pantalla
  for(var a = 0; a < ball_up.length; a++){
    if(ball_up[a][0].x > 368){
      renovateBall();
    }
  }
  
/*
  
  if(ball_down[0][50].y>345){
      var velocityDown0 = random(1, 3);
      for(var qa = 0; qa < 51; qa++){
        ball_down[0][qa] = new Ball(268, -102, velocityDown0-(0.015*qa), transDown0);
        transDown0=transDown0-5;
        ball_down[0][qa].moveDown();
        ball_down[0][qa].show();
      }
      transDown0 = 255;
  }
  
  if(ball_down[2][50].y>495){
      var velocityDown1 = random(1, 3);
      for(var qb = 0; qb < 51; qb++){
        ball_down[0][qb] = new Ball(393, 23, velocityDown1-(0.015*qb), transDown2);
        transDown2=transDown2-5;
      }
      transDown2 = 255;
  }
  
  if(ball_down[4][50].y>620){
      var velocityDown2 = random(1, 3);
      for(var qc = 0; qc < 51; qc++){
        ball_down[0][qc] = new Ball(543, 173, velocityDown2-(0.015*qc), transDown4);
        transDown4=transDown4-5;
      }
      transDown4 = 255;
  }
  
  for(var j = 0; j<4; j++){
    for(var c=0; c < 17; c++){
      ball_up[j][c].moveUp();
      ball_up[j][c].show();
    }
  }
  
  for(var m = 0; m<5; m++){
    for(var b=0; b < 51; b++){
      ball_down[m][b].moveDown();
      ball_down[m][b].show();
    }
  }
  */
};