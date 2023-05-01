function setup() {
  createCanvas(400, 400);
  background(255, 215, 0);
  colorMode(HSB);
  frameRate(2);
}

function draw() {
  for(var j = 0; j < 20; j += 1) {
    fill(random(175,360),75,100);
    for(var i = 0; i < 20; i += 1) {
      circle(10 + j*20, 10 + i*20, 15);
    }
  } 
}
