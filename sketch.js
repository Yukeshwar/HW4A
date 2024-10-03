function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(220, 220, 220); 
  let centerX = width / 2; 
  let centerY = height / 2; 
  let numCircles = 60; 
  let ringSpacing = 100; 
  for (let r = 1; r <= 5; r++) { 
    for (let i = 0; i < numCircles; i++) { 
      let angle = (TWO_PI / numCircles) * i; 
      let x = centerX + cos(angle) * r * ringSpacing; 
      let y = centerY + sin(angle) * r * ringSpacing; 
      let circleSize = r * 10; 
      fill(50 + r * 40, 100 + r * 20, 200 - r * 30); 
      noStroke(); 
      ellipse(x, y, circleSize, circleSize);
    }
  }
}

function draw() {
}
