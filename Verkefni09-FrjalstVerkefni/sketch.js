/*
Hér er frjálst verkefni í p5 unnið í áfanganum skapandi forritun (TÖLV1AS05) við MH. Verkefnið er unnið af Hildigunni Ingadóttur, en innblástur þess kemur frá sumrinu sem nálgast. Hugmyndin er sú að leyfa notendum að skapa sína eigin garðlist með því að staðsetja allskyns blóm og gróður á grasi. Notandi smellir einfaldlega á skjáinn með músinni sinni og plantar þar með blómi/plöntu. Svo er hægt að leika sér að ólíkum útfærslum með því að ýta aftur á play takkann og hreinsa garðinn.
*/

function setup() {
  createCanvas(400, 400);
  background(122,203,100);
}

//breytan sem ákvarðar hvaða blóm er teiknað
var j = 0

function mousePressed() {
  
  //breytum j til þess að skipta um blóm
  j += 1
  
  if (j == 1) {
        
    //fyrsta blómið teiknað, þ.e. gula blómið
    fill(252,191,random(255));
    bezier(mouseX, mouseY, mouseX-40, mouseY-10, mouseX-10, mouseY-40, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX+40, mouseY+10, mouseX+10, mouseY+40, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX+40, mouseY-10, mouseX+10, mouseY-40, mouseX,mouseY);
    bezier(mouseX, mouseY, mouseX-40, mouseY+10, mouseX-10, mouseY+40, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX-20, mouseY-35, mouseX+20, mouseY-35, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX+35, mouseY+20, mouseX+35, mouseY-20, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX-35, mouseY-20, mouseX-35, mouseY+20, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX+20, mouseY+35, mouseX-20, mouseY+35, mouseX, mouseY);
    
    //hringurinn í miðjunni á blóminu teiknað
    fill("brown");
    circle(mouseX,mouseY,10);    
  }
      
  if (j == 2) {
        
  //annað blómið teiknað, þ.e. fjólubláa blómið
    fill(125,75,random(150,256));
    bezier(mouseX, mouseY, mouseX-35, mouseY-12, mouseX-12, mouseY-35, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX+35, mouseY+12, mouseX+12, mouseY+35, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX+35, mouseY-12, mouseX+12, mouseY-35, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX-35, mouseY+12, mouseX-12, mouseY+35, mouseX, mouseY);

    bezier(mouseX, mouseY, mouseX-25, mouseY-30, mouseX+25, mouseY-30, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX+30, mouseY+25, mouseX+30, mouseY-25, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX-30, mouseY-25, mouseX-30, mouseY+25, mouseX, mouseY);
    bezier(mouseX, mouseY, mouseX+25, mouseY+30, mouseX-25, mouseY+30, mouseX, mouseY);

    //hringurinn í miðjunni teiknaður
    fill(250);
    circle(mouseX,mouseY,7);
    
    //
  }
      
  if (j == 3) {
        
    //þriðja „blómið“ teiknað, þ.e. fjögra blaða smári
    fill(57, 153, 58);
    bezier(mouseX, mouseY, mouseX-45, mouseY, mouseX, mouseY-45, mouseX,mouseY);
    bezier(mouseX, mouseY, mouseX+45, mouseY, mouseX, mouseY+45, mouseX,mouseY);
    bezier(mouseX, mouseY, mouseX+45, mouseY, mouseX, mouseY-45, mouseX,mouseY);
    bezier(mouseX, mouseY, mouseX-45, mouseY, mouseX, mouseY+45, mouseX,mouseY);
  }
      
  if (j == 4) {
    
    //fjórða blómið teiknað, þ.e. bláa/græna blómið
    fill(151,199,random(255));
    circle(mouseX+12,mouseY-3,17);
    circle(mouseX+7,mouseY+10,17);
    circle(mouseX-8,mouseY+10,17);
    circle(mouseX-12,mouseY-3,17);
    circle(mouseX,mouseY-12,17);
        
    //hringurinn í miðjunni teiknaður
    fill(231,197,36);
    circle(mouseX,mouseY,11);
  }
      
  if (j == 5) {
    
    //fimmta blómið teiknað, þ.e. rauða/bleika blómið
    fill(236,43,random(255));
    circle(mouseX-16,mouseY,20);
    circle(mouseX+16,mouseY,20);
    circle(mouseX-8,mouseY-14,20);
    circle(mouseX+8,mouseY+14,20);
    circle(mouseX-8,mouseY+14,20);
    circle(mouseX+8,mouseY-14,20);
        
    //hringurinn í miðjunni teiknaður
    fill(253,225,0);
    circle(mouseX,mouseY,15);
    
    j = 0
  }
}