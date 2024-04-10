let ellipseColor;
let buttonSize = 40; // Size of each button
let buttonGap = 10; // Gap between buttons
var flowerno;
let buttonColors = ['#FA42AC', '#F54F51', '#ECCA3D', '#91C7EB', '#3890CB', '#834AC1'];
var canvas;


function preload() {
  flower1 = loadImage('flowers-01.png');
  flower2 = loadImage('flowers-02.png');
  flower3 = loadImage('flowers-03.png');
  flower4 = loadImage('flowers-04.png');
  flower5 = loadImage('flowers-05.png');
  flower6 = loadImage('flowers-06.png');
  bg = loadImage('grass.jpg')
}


function setup() {
  canvas = createCanvas(800, 800);
  canvas.position(600, 10); 
  background(bg)
  
  noStroke();


  ellipseColor = color(255, 0, 0);
  
  let colors = [flower1, flower2, flower3, flower4, flower5, flower6];
  
  // Create buttons for each color
  for(let i = 0; i < colors.length; i++) {
    let buttonY = i * (buttonSize + buttonGap) + buttonGap; // Calculate Y position for each button
    let buttonX = width - buttonSize - buttonGap; // X position for buttons
    let button = createButton('').mousePressed(() =>     flowerno=i);
    button.position(buttonX+600, buttonY+10);
    button.size(buttonSize, buttonSize);
    button.style('background-color', buttonColors[i]);
    console.log(colors[i])
  }
  
  
}

function draw() {
  // No need to draw the ellipse in draw() anymore, it will be drawn on mouse click
}

function mousePressed() {
  console.log(flowerno)
  
  if(mouseX>750 && mouseY<300){
 
  }
  
  else{
  
  if (flowerno == 0){
      image(flower3, mouseX-70, mouseY-100, 150,150);
  }
    
  if (flowerno == 1){
      image(flower6, mouseX-50, mouseY-70, 170,170);
  }
    
  if (flowerno == 2){
     image(flower1, mouseX-80, mouseY-120, 200,200);
  }
    
  if (flowerno == 3){
      image(flower5, mouseX-60, mouseY-60, 150,150);
  }
    
  if (flowerno == 4){
      image(flower2, mouseX-50, mouseY-50, 100,100);
  }
    
  if (flowerno == 5){
      image(flower4, mouseX-40, mouseY-50, 100,100);
  }


  } 
  
}

function changeColor(newColor) {
  ellipseColor = newColor;
}