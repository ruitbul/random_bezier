color[] colArray = {

  color(29,30,31),
  color(62,73,84), 
  color(189, 8, 59), 
  color(146, 137, 7),
  color(0, 56, 168),
 //color(20, 244, 50), 
};

float xloc = 0;

int grid = 60;
int margin = 10;

void setup(){
  size(700, 900);
  //noLoop();
 // frameRate(2);
}
  
  
void draw(){
  background(15, 20, 30);
  xloc += 0.03;
  float d = grid* 0.001;
  
  for (int i = margin; i<=width-margin; i+= grid) {
    for (int j = margin; j<=height-margin; j+= grid) {
      int colArrayNum = (int)random(5);
      stroke(colArray[colArrayNum]);
      strokeWeight(random(4));     

  
  pushMatrix();
  translate(i, j);
  noFill();
  float noise1 = noise(xloc);
  float noise2 = noise(xloc);
  float noise3 = noise(xloc);
  float noise4 = noise(xloc);
  float noise5 = noise(xloc);
  float noise6 = noise(xloc);
  float noise7 = noise(xloc);
  float noise8 = noise(xloc);
  float noise9 = noise(xloc);
  float noise10 = noise(xloc);
  
  
  float h = randomGaussian();
  float h1 = h * mouseX + random(15);
  float h2 = h * mouseX + random(31);
  float h3 = h * mouseX + random(24);
  float h4 = h * mouseX + random(60);
  float h5 = h * mouseX;
  float h6 = h * mouseX + random(90);
  
  //float h = randomGaussian();
  //float h1 = h * random(1500);
  //float h2 = h * random(3100);
  //float h3 = h * random(2400);
  //float h4 = h * random(1200);
  //float h5 = h * random(2200);
  //float h6 = h * random(1200);
  

  //noise1 = map(noise1, 0, 1, 0, 150);
  //noise2 = map(noise2, 0, 1, 0, 160);
  //noise3 = map(noise3, 0, 1, 0, 170);
  //noise4 = map(noise4, 0, 1, 0, 180);
  //noise5 = map(noise5, 0, 1, 0, 165);
  //noise6 = map(noise6, 0, 1, 0, 319);
  //noise7 = map(noise7, 0, 1, 0, 249);
  //noise8 = map(noise8, 0, 1, 0, 122);
  //noise9 = map(noise9, 0, 1, 0, 226);
  //noise10 = map(noise10, 0, 1, 0, 12);
  
  noise1 = map(noise1, 0, 1, 0, mouseX);
  noise2 = map(noise2, 0, 1, 0, -mouseX);
  noise3 = map(noise3, 0, 1, 0, 170);
  noise4 = map(noise4, 0, 1, 0, 180);
  noise5 = map(noise5, 0, 1, 0, 165);
  noise6 = map(noise6, 0, 1, 0, 319);
  noise7 = map(noise7, 0, 1, 0, 249);
  noise8 = map(noise8, 0, 1, 0, 122);
  noise9 = map(noise9, 0, 1, 0, 226);
  noise10 = map(noise10, 0, 1, 0, 12);
  

  beginShape();
  vertex(100, 100);
  quadraticVertex(noise1, noise2, noise3, noise4);
  bezierVertex(h1, h2, h3, h4, h5, h6);
  endShape(CLOSE);
  popMatrix();
}
}
}
//}
