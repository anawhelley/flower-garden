let ellipseColor;
let buttonSize = 40; // Size of each button
let buttonGap = 10; // Gap between buttons
var flowerno;

function preload() {
  flower1 = loadImage('flower.jpg');
  flower2 = loadImage('flower2.jpg');
}


function setup() {
  createCanvas(700, 700);
  c.parent('rightcan');
  background(255)
  
  noStroke();
  rect(630, 0, 70, 325)

  ellipseColor = color(255, 0, 0);
  
  let colors = [flower1, flower2, color(236, 202, 61), color(145, 199, 235), color(56, 144, 203), color(131, 74, 193)];
  
  // Create buttons for each color
  for(let i = 0; i < colors.length; i++) {
    let buttonY = i * (buttonSize + buttonGap) + buttonGap; // Calculate Y position for each button
    let buttonX = width - buttonSize - buttonGap; // X position for buttons
    let button = createButton('').mousePressed(() =>     flowerno=i);
    button.position(buttonX, buttonY);
    button.size(buttonSize, buttonSize);
    button.style('background-color', colors[i]);
    console.log(colors[i])
  }
  
  
}

function draw() {
  // No need to draw the ellipse in draw() anymore, it will be drawn on mouse click
}

function mousePressed() {
  console.log(flowerno)
  
  if(mouseX>650 && mouseY<300){
 
  }
  
  else{
  
  if (flowerno == 0){
      image(flower1, mouseX, mouseY, 50,50);
  }
    
    if (flowerno == 1){
      image(flower2, mouseX, mouseY, 50,50);
  }

  } 
  
}

function changeColor(newColor) {
  ellipseColor = newColor;
}