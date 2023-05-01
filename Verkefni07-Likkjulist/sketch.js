function setup() {
  createCanvas(400, 400);
  frameRate(1.2);
  strokeWeight(0.5);
}

var mynd = 1

function draw() {
  background(197,219,107);
  
  //fyrri myndin teiknuð
  if (mynd == 1) {
      
    //staðsetning og fjöldi sóla
    for(var i = 0; i < 5; i += 1) { 
      if (i == 0) {
        x = 85
        y = 85
      }
      if (i == 1) {
        x = 315
        y = 85
      }
      if (i == 2) {
        x = 85
        y = 315
      }
      if (i == 3) {
        x = 315
        y = 315
      }
      if (i == 4) {
        x = 200
        y = 200
      }
        
      //sólir
      fill(255,219,110);
      circle(x,y,45);
      triangle(x,y-50,x-5,y-30,x+5,y-30);
      triangle(x,y+50,x-5,y+30,x+5,y+30);
      triangle(x-50,y,x-30,y+5,x-30,y-5);
      triangle(x+50,y,x+30,y+5,x+30,y-5);
      triangle(x-37,y-37,x-17,y-27,x-27,y-17);
      triangle(x+37,y-37,x+17,y-27,x+27,y-17);
      triangle(x-37,y+37,x-17,y+27,x-27,y+17);
      triangle(x+37,y+37,x+17,y+27,x+27,y+17);
      }

    //staðsetning og fjöldi blóma
    for(var j = 0; j < 4; j += 1) {
      if (j == 0) {
        x = 200
        y = 85
      }
      if (j == 1) {
        x = 200
        y = 315
      }
      if (j == 2) {
        x = 85
        y = 200
      }
      if (j == 3) {
        x = 315
        y = 200
      }
        
      //blóm
      fill(45,145,100);
      circle(x-13,y,15);
      circle(x+13,y,15);
      circle(x-7,y-10,15);
      circle(x+7,y+10,15);
      circle(x-7,y+10,15);
      circle(x+7,y-10,15);
      fill(255);
      circle(x,y,12);
    }
  }

  //seinni myndin teiknuð
  else {
      
    //staðsetning og fjöldi sóla
    for(var j = 0; j < 4; j += 1) {
      if (j == 0) {
        x = 200
        y = 85
      }
      if (j == 1) {
        x = 200
        y = 315
      }
      if (j == 2) {
        x = 85
        y = 200
      }
      if (j == 3) {
        x = 315
        y = 200
      }
        
      //sólir
      fill(255,219,110);
      circle(x,y,45);
      triangle(x,y-50,x-5,y-30,x+5,y-30);
      triangle(x,y+50,x-5,y+30,x+5,y+30);
      triangle(x-50,y,x-30,y+5,x-30,y-5);
      triangle(x+50,y,x+30,y+5,x+30,y-5);
      triangle(x-37,y-37,x-17,y-27,x-27,y-17);
      triangle(x+37,y-37,x+17,y-27,x+27,y-17);
      triangle(x-37,y+37,x-17,y+27,x-27,y+17);
      triangle(x+37,y+37,x+17,y+27,x+27,y+17);

    }

    //staðsetning og fjöldi blóma
    for(var i = 0; i < 5; i += 1) {
      if (i == 0) {
        x = 85
        y = 85
      }
      if (i == 1) {
        x = 315
        y = 85
      }
      if (i == 2) {
        x = 85
        y = 315
      }
      if (i == 3) {
        x = 315
        y = 315
      }
      if (i == 4) {
        x = 200
        y = 200
      }
        
      //blóm
      fill(45,145,100);
      circle(x-13,y,15);
      circle(x+13,y,15);
      circle(x-7,y-10,15);
      circle(x+7,y+10,15);
      circle(x-7,y+10,15);
      circle(x+7,y-10,15);
      fill(255);
      circle(x,y,12);
    } 
  }
  
  //ákvarðar hvor myndin er teiknuð, látnar skiptast á
  if (mynd == 1) {
    mynd = 2
  }
  
  else {
    mynd = 1
  }

}