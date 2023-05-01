function setup() {
  createCanvas(400, 400);
  noStroke()
  frameRate(7)
}

function draw() {
  background(220);
  
  if (mouseX > 200) {
    if (mouseY > 200) {
      fill(152,224,157);
      rect(200,200,200,200);
      for (var j = 0; j < 25; j += 1) {
        fill(48,105,68);
        var b = random(200,360);
        var h = random(200,360);
        triangle(20+b,10+h,13+b,25+h,27+b,25+h);
      }
    }
    else {
      fill(246,160,160);
      rect(200,0,200,200);
      fill(254,57,58);
      for (var i = 0; i < 30; i += 1) {
        circle(random(215,385),random(15,185),random(5,15));
      }
    }
  }
  else {
    if (mouseY > 200) {
      fill(138,207,241);
      rect(0,200,200,200);
      fill(2,128,191);
      for (var i = 0; i < 30; i += 1) {
        circle(random(15,185),random(215,385),random(5,15));
      }
    }
    else {
      fill(245,245,146);
      rect(0,0,200,200);
      for (var j = 0; j < 25; j += 1) {
        fill(255,179,71);
        var b = random(0,160);
        var h = random(0,160);
        triangle(20+b,10+h,13+b,25+h,27+b,25+h);
        
      }
    }
  }
     
}