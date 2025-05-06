function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  for (let i = 0; i < 20; i++) {
    rect(mouseX/10*i, mouseY/10*i, 10*i, 10*i);

  }

  for (let i = 0; i < 20; i++) {
    circle(width/2, height/2, 10*i);
  }
}

