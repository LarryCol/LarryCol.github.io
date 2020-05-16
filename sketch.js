// new p5(); use this for using p5 js funtions outside setup and draw

var num = 0;

function setup() {
  createCanvas(400, 400);
  background(22);
}

function draw() {
  var elli = {
    x: random(0, 400),
    y: random(0, 400),
    colo: random(0, 255),
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255),
    alph: random(0, 125)
  };
  noStroke();
  fill(elli.r, elli.g, elli.b, elli.alph);
  ellipse(elli.x, elli.y, 15, 20);
  rect(elli.x, elli.y, 10, 15);

  num += 0.5;
  while (num > 150) {
    background(22);
    num = 0;
  }

}

// function mousePressed() {
//   background(22);
//   console.log('^^');
// }
