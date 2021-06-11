//As far as I can tell, this sketch has the same code as the Processing sketch. This sketch looks slightly different from the processing sketch, which has a different direction in the Bezier curves.

//Adding sin() and cos() to where the shapes are being drawn adds some cool affects.


let colArray = [];
  
// let c1 = color(29, 30, 31);
// let c2 = color(189, 8, 59);
// let c3 = color(62,73,84);
// let c4 = color(146, 137, 7);
// let c5 = color(0, 56, 168);


//   colArray.push(c1);
//   colArray.push(c2); 
//   colArray.push(c3); 
//   colArray.push(c4);
//   colArray.push(c5);


let xloc = 0;
let grid = 60;
let margin = 10;

function setup(){
  createCanvas(800, 600);



  
let c1 = color(29, 30, 31);
let c2 = color(189, 8, 59);
let c3 = color(62,73,84);
let c4 = color(146, 137, 7);
let c5 = color(0, 56, 168);


  colArray.push(c1);
  colArray.push(c2); 
  colArray.push(c3); 
  colArray.push(c4);
  colArray.push(c5);
  
}
function draw(){
  background(15, 20, 30);
  xloc += 0.03;
  let d = grid* 0.001;
  
  for (i = margin; i<=width-margin; i+= grid) {
    for ( j = margin; j<=height-margin; j+= grid) {
      var colArrayNum = int(random(5));
      //console.log(colArrayNum);
      stroke(colArray[colArrayNum]);
      strokeWeight(random(4));     

  
  push();
  translate(i, j);
  noFill();
  let noise1 = noise(xloc);
  let noise2 = noise(xloc);
  let noise3 = noise(xloc);
  let noise4 = noise(xloc);
  let noise5 = noise(xloc);
  let noise6 = noise(xloc);
  let noise7 = noise(xloc);
  let noise8 = noise(xloc);
  let noise9 = noise(xloc);
  let noise10 = noise(xloc);
  
  
  let h = randomGaussian();
  let h1 = h * mouseX + random(15);
  let h2 = h * mouseX + random(31);
  let h3 = h * mouseX + random(24);
  let h4 = h * mouseX + random(60);
  let h5 = h * mouseX;
  let h6 = h * mouseX + random(90);
  
  //let h = randomGaussian();
  //let h1 = h * random(1500);
  //let h2 = h * random(3100);
  //let h3 = h * random(2400);
  //let h4 = h * random(1200);
  //let h5 = h * random(2200);
  //let h6 = h * random(1200);
  

  //let = map(noise1, 0, 1, 0, 150);
  //let = map(noise2, 0, 1, 0, 160);
  //let = map(noise3, 0, 1, 0, 170);
  //let = map(noise4, 0, 1, 0, 180);
  //let = map(noise5, 0, 1, 0, 165);
  //let = map(noise6, 0, 1, 0, 319);
  //let = map(noise7, 0, 1, 0, 249);
  //let = map(noise8, 0, 1, 0, 122);
  //let = map(noise9, 0, 1, 0, 226);
  //let = map(noise10, 0, 1, 0, 12);
  
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
  pop();
    }
  }
}