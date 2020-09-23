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

var moveShowBalls = function(numBalls, subBalls) {
  for (var j = 0; j < numBalls; j++) {
    for (var c = 0; c < subBalls; c++) {
      if (numBalls == 8) {
          ball_up[j][c].moveUp();
          ball_up[j][c].show();
      } else {
          ball_down[j][c].moveDown();
          ball_down[j][c].show();
      }
    }
  }
}

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