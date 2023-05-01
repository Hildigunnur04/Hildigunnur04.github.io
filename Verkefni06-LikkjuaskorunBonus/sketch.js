function setup() {
  createCanvas(400, 400);
  background(255, 215, 0);
  colorMode(HSB)
  frameRate(2);
  strokeWeight(2);
  
}

function draw() {
  for(var i = 0; i < 10; i += 1) {
    fill(random(175,360),75,100);
    circle(200, 200, 300 - i*30);
    }
}