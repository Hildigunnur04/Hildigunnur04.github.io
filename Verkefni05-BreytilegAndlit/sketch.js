var andlitBreidd = 145
var andlitLengd = 180
var auguBreidd = 20
var auguLengd = 25
var harlitur1 = 93
var harlitur2 = 176
var harlitur3 = 76
var nef = 150
var eyru = 300
var x = 250
var y = 250

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(233,242,248);
  
  //eyru
  fill('#F8D054');
  stroke(0);
  curve(35,350,x+andlitBreidd/2-15,y-andlitLengd/6,x+andlitBreidd/2-15,y+andlitLengd/12,145,145);
  curve(465,350,x-andlitBreidd/2+15,y-andlitLengd/6,x-andlitBreidd/2+15,y+andlitLengd/12,355,145);
  
  //haus
  ellipse(x,y,andlitBreidd,andlitLengd);
  
  //nef
  noFill();
  curve(nef,255,245,270,250,250,150,135);
  
  //augu
  fill('#F6EEEE');
  ellipse(x-35,y-15,auguLengd,auguBreidd);
  ellipse(x+35,y-15,auguLengd,auguBreidd);
  fill('#493802');
  circle(x-32,y-14,auguLengd/2*auguBreidd/auguLengd);
  circle(x+38,y-14,auguLengd/2*auguBreidd/auguLengd);

  //munnur
  fill('#CF6F68')
  curve(250,235,x-andlitBreidd/8,y+andlitLengd/4,x+andlitBreidd/8,y+andlitLengd/4,250,235);
  line(x-andlitBreidd/8,y+andlitLengd/4,x+andlitBreidd/8,y+andlitLengd/4);
    
  //augabrúnir
  beginShape();
  fill(harlitur1,harlitur2,harlitur3);
  vertex(x-13,y-35);
  vertex(x-35,y-40);
  vertex(x-andlitBreidd/4-20,y-30);
  vertex(x-35,y-35);
  vertex(x-15,y-30);
  vertex(x-13,y-35);
  endShape();
  
  beginShape();
  vertex(x+13,y-35);
  vertex(x+35,y-40);
  vertex(x+andlitBreidd/4+20,y-30);
  vertex(x+35,y-35);
  vertex(x+15,y-30);
  vertex(x+13,y-35);
  endShape();
  
  //hár
  beginShape();
  var y2 = y-andlitLengd/2
  var x2 = andlitBreidd/2-andlitBreidd/andlitLengd
  
  //hægri hlið
  vertex(x,y2+60);
  vertex(x+15,y2+30);
  vertex(x+35,y2+50);
  vertex(x+45,y2+30);
  vertex(x+x2,y2+65);
  vertex(x+x2-5,y2+40);
  vertex(x+x2+20,y2+40);
  vertex(x+x2-5,y2+20);
  vertex(x+x2+15,y2);
  vertex(x+x2-15,y2+2);
  vertex(x+x2-15,y2-25);
  vertex(x+x2-40,y2-10);
  vertex(x+x2-55,y2-40);
  
  //vinstri hlið
  vertex(x,y2-10);
  vertex(x-x2+55,y2-40);
  vertex(x-x2+40,y2-10);
  vertex(x-x2+15,y2-25);
  vertex(x-x2+15,y2+2);
  vertex(x-x2-15,y2);
  vertex(x-x2+5,y2+20);
  vertex(x-x2-20,y2+40);
  vertex(x-x2+5,y2+40);
  vertex(x-x2,y2+65);
  vertex(x-45,y2+30);
  vertex(x-35,y2+50);
  vertex(x-15,y2+30);
  vertex(x,y2+60);
  
  endShape();

}


function mousePressed() {
  andlitBreidd  = random(135,190); 
  andlitLengd = random(175,225);
  auguBreidd = random(15,30);
  auguLengd = random(15,35);
  harlitur = (harlitur1,harlitur2,harlitur3);
  harlitur1 = random(50,250);
  harlitur2 = random(50,250);
  harlitur3 = random(50,250);
  nef = random(75,190);
  eyru = random(250,300);
}