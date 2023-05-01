var x = 250;
var y = 250;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(254,219,68);
  strokeWeight(7);
  
  
  //form
  beginShape();
  stroke(42,214,241);
  fill(255,37,85);
  
  //fyrsta hlið
  vertex(x+30,y-30);
  vertex(x+100,y-100);
  vertex(x+150,y-50);
  vertex(x+80,y+20);
  
  //önnur hlið
  vertex(x+150,y+90);
  vertex(x+100,y+140);
  vertex(x+30,y+70);
  
  //þriðja hlið
  vertex(x-40,y+140);
  vertex(x-90,y+90);
  vertex(x-20,y+20);
  
  //fjórða hlið
  vertex(x-90,y-50);
  vertex(x-40,y-100);
  vertex(x+30,y-30);
  
  endShape();
}