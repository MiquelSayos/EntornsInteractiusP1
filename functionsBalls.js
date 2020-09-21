var createBall = function(arrayBalls, numBalls, subBalls, alphaColor, x, y){
  if (arrayBalls.length < 1){
    for(var i = 0; i<numBalls; i++){
      var velocity=random(1, 3);
      arrayBalls[i]=[];
      for(var z = 0; z < subBalls; z++){
        var velocityBall = velocity-(0.02*z);
        arrayBalls[i][z] = new Ball(x, y, velocityBall, trans);
        trans=trans-alphaColor;
      }
      trans = 255;
      x=x+75;
      y=y+75;
    }
  }
}

var moveShowBalls = function(numBalls, subBalls){
  for(var j = 0; j < numBalls; j++){
    for(var c=0; c < subBalls; c++){
      if (numBalls==4){
        ball_up[j][c].moveUp();
        ball_up[j][c].show();
      }
      else{
        ball_down[j][c].moveDown();
        ball_down[j][c].show();
      }
    }
  }
}

var renovateBall = function(){
  
}