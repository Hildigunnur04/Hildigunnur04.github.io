function setup() {
    createCanvas(400, 500);
    background(251,194,26);
    strokeWeight(2)
  }
  
  function draw() {
    noStroke()
    fill(0)
    triangle(65,467,320,455,200,120);
    fill(114,103,215)
    triangle(320,25,65,37,200,120);
    fill(76,61,177)
    triangle(320,25,200,350,200,120);
    fill(88,74,195)
    triangle(65,37,151,245,200,120);
    
    stroke(255,127,13)
    line(65,37,320,25)
    stroke(245,84,66)
    line(320,25,243,237)
    stroke(247,153,221)
    line(65,37,150,245)
    stroke(112,46,158)
    line(151,243,65,467)
    stroke(4,89,74)
    line(65,467,320,455)
    stroke(61,147,252)
    line(243,237,320,455)
  }