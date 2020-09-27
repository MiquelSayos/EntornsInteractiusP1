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


var scene2 = function() {
  textSize(40);
  textFont(fontBold);
  fill(255);
  
  //Comprovar que les boles passen per les posicions de les lletres per aparèixer i així activar totes les lletres
  if (ball_down[0][0].x > 150 && ball_down[0][0].x < 185 && ball_up[0][0].x < 185 && ball_up[0][0].x > 150) {
    textR = true;
  }
  if (((ball_down[1][0].x > 175 && ball_down[1][0].x < 215) || (ball_down[2][0].x > 175 && ball_down[2][0].x < 215)) && ball_up[0][0].x < 215 && ball_up[0][0].x > 175) {
    textE1 = true;
  }
  if (((ball_down[1][0].x > 150 && ball_down[1][0].x < 180) || (ball_down[2][0].x > 150 && ball_down[2][0].x < 180)) && ball_up[0][0].x < 180 && ball_up[0][0].x > 150) {
    textS1 = true;
  }
  if (((ball_down[1][0].x > 175 && ball_down[1][0].x < 215) || (ball_down[2][0].x > 175 && ball_down[2][0].x < 215)) && ((ball_up[1][0].x < 215 && ball_up[1][0].x > 175) || (ball_up[2][0].x < 215 && ball_up[2][0].x > 175) || (ball_up[3][0].x < 215 && ball_up[3][0].x > 175))) {
    textO = true;
  }
  if (((ball_down[1][0].x > 150 && ball_down[1][0].x < 185) || (ball_down[2][0].x > 150 && ball_down[2][0].x < 185)) && ((ball_up[1][0].x < 185 && ball_up[1][0].x > 150) || (ball_up[2][0].x < 185 && ball_up[2][0].x > 150) || (ball_up[3][0].x < 185 && ball_up[3][0].x > 150))) {
    textN1 = true;
  }
  if (ball_down[3][0].x > 175 && ball_down[3][0].x < 215) {
    textA = true;
  }
  if (ball_down[3][0].x > 150 && ball_down[3][0].x < 185 && ((ball_up[4][0].x < 185 && ball_up[4][0].x > 150) || (ball_up[5][0].x < 185 && ball_up[5][0].x > 150) || (ball_up[6][0].x < 185 && ball_up[6][0].x > 150))) {
    textN2 = true;
  }
  if (((ball_down[4][0].x > 175 && ball_down[4][0].x < 215) || ball_down[5][0].x > 175 && ball_down[5][0].x < 215) && ((ball_up[4][0].x < 215 && ball_up[4][0].x > 175) || (ball_up[5][0].x < 215 && ball_up[5][0].x > 175) || (ball_up[6][0].x < 215 && ball_up[6][0].x > 175))) {
    textC = true;
  }
  if (((ball_down[4][0].x > 150 && ball_down[4][0].x < 185) || ball_down[5][0].x > 150 && ball_down[5][0].x < 185) && ((ball_up[4][0].x < 185 && ball_up[4][0].x > 150) || (ball_up[5][0].x < 185 && ball_up[5][0].x > 150) || (ball_up[6][0].x < 185 && ball_up[6][0].x > 150))) {
    textE2 = true;
  }
  if (((ball_down[4][0].x > 150 && ball_down[4][0].x < 185) || (ball_down[5][0].x > 150 && ball_down[5][0].x < 185)) && (ball_up[7][0].x < 215 && ball_up[7][0].x > 175)) {
    textS2 = true;
  }

  //Quan les lletres estan actives es fica amb majúsucula o minúscula depenent de si passen per sobre o no
  if (textR == true) {
    if (ball_down[0][0].x > 150 && ball_down[0][0].x < 185 && ball_up[0][0].x < 185 && ball_up[0][0].x > 150) {
      text("r", 168, 40);
    } else {
      text("R", 168, 40);
    }
  }
  if (textE1 == true) {
    if (((ball_down[1][0].x > 175 && ball_down[1][0].x < 215) || (ball_down[2][0].x > 175 && ball_down[2][0].x < 215)) && ball_up[0][0].x < 215 && ball_up[0][0].x > 175) {
      text("é", 199, 90);
    } else {
      text("É", 199, 90);
    }
  }
  if (textS1 == true) {
    if (((ball_down[1][0].x > 150 && ball_down[1][0].x < 180) || (ball_down[2][0].x > 150 && ball_down[2][0].x < 180)) && ball_up[0][0].x < 180 && ball_up[0][0].x > 150) {
      text("s", 168, 140);
    } else {
      text("S", 168, 140);
    }
  }
  if (textO == true) {
    if (((ball_down[1][0].x > 175 && ball_down[1][0].x < 215) || (ball_down[2][0].x > 175 && ball_down[2][0].x < 215)) && ((ball_up[1][0].x < 215 && ball_up[1][0].x > 175) || (ball_up[2][0].x < 215 && ball_up[2][0].x > 175) || (ball_up[3][0].x < 215 && ball_up[3][0].x > 175))) {
      text("o", 199, 190);
    } else {
      text("O", 199, 190);
    }
  }
  if (textN1 == true) {
    if (((ball_down[1][0].x > 150 && ball_down[1][0].x < 185) || (ball_down[2][0].x > 150 && ball_down[2][0].x < 185)) && ((ball_up[1][0].x < 185 && ball_up[1][0].x > 150) || (ball_up[2][0].x < 185 && ball_up[2][0].x > 150) || (ball_up[3][0].x < 185 && ball_up[3][0].x > 150))) {
      text("n", 168, 240);
    } else {
      text("N", 168, 240);
    }
  }
  if (textA == true) {
    if (ball_down[3][0].x > 175 && ball_down[3][0].x < 215) {
      text("a", 199, 290);
    } else {
      text("A", 199, 290);
    }
  }
  if (textN2 == true) {
    if (ball_down[3][0].x > 150 && ball_down[3][0].x < 185 && ((ball_up[4][0].x < 185 && ball_up[4][0].x > 150) || (ball_up[5][0].x < 185 && ball_up[5][0].x > 150) || (ball_up[6][0].x < 185 && ball_up[6][0].x > 150))) {
      text("n", 168, 340);
    } else {
      text("N", 168, 340);
    }
  }
  if (textC == true) {
    if (((ball_down[4][0].x > 175 && ball_down[4][0].x < 215) || ball_down[5][0].x > 175 && ball_down[5][0].x < 215) && ((ball_up[4][0].x < 215 && ball_up[4][0].x > 175) || (ball_up[5][0].x < 215 && ball_up[5][0].x > 175) || (ball_up[6][0].x < 215 && ball_up[6][0].x > 175))) {
      text("c", 199, 390);
    } else {
      text("C", 199, 390);
    }
  }
  if (textE2 == true) {
    if (((ball_down[4][0].x > 150 && ball_down[4][0].x < 185) || ball_down[5][0].x > 150 && ball_down[5][0].x < 185) && ((ball_up[4][0].x < 185 && ball_up[4][0].x > 150) || (ball_up[5][0].x < 185 && ball_up[5][0].x > 150) || (ball_up[6][0].x < 185 && ball_up[6][0].x > 150))) {
      text("e", 168, 440);
    } else {
      text("E", 168, 440);
    }
  }
  if (textS2 == true) {
    if (((ball_down[4][0].x > 150 && ball_down[4][0].x < 185) || (ball_down[5][0].x > 150 && ball_down[5][0].x < 185)) && (ball_up[7][0].x < 215 && ball_up[7][0].x > 175)) {
      text("s", 199, 490);
    } else {
      text("S", 199, 490);
    }
  }
}