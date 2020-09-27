//Posicions de les paraules laterals
var i = -55;
var j = 423;

var scene3 = function() {
  textSize(8);
  textFont(fontSemi);
  textStyle(BOLD);
  textAlign(LEFT);
  fill(255, 51, 51);

  //Paraules de l'esquerra
  i = i+0.5;
  if(i <= 10){
    text("ELECTRONIC", i, 20);
    text("MUSIC", i, 30);
    text("FESTIVAL", i, 40);
    text("#7", i, 50);
  }
  else{
    text("ELECTRONIC", 10, 20);
    text("MUSIC", 10, 30);
    text("FESTIVAL", 10, 40);
    text("#7", 10, 50);
  }
  
  //Paraules de la dreta
  textAlign(RIGHT);
  j = j-0.5;
  if(j >= 358){
    text("DIJON", j, 480);
  text("DU 07 AU I0", j, 490);
  text("NOVEMBER", j, 500);
  text("2013", j, 510);
  }
  else{
    text("DIJON", 358, 480);
  text("DU 07 AU I0", 358, 490);
  text("NOVEMBER", 358, 500);
  text("2013", 358, 510);
  }
}