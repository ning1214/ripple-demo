let rippleX, rippleY;
let rippleRadius = 0;
let isRippling = false;

function setup() {
  createCanvas(500, 800);
  background(0);
  stroke(255);
  noFill();
}

function draw() {
  background(0);

  if (isRippling) {
    rippleRadius += 2;
    ellipse(rippleX, rippleY, rippleRadius, rippleRadius);

    if (rippleRadius > 200) {
      isRippling = false;
    }
  }
}

function mousePressed() {
  rippleX = mouseX;
  rippleY = mouseY;
  rippleRadius = 0;
  isRippling = true;
}
