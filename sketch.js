var a = 1;
var b = 1;
var n1 = 0.1;
var n2 = 1.7;
var n3 = 1.7;

function setup() {
  noFill();
  createCanvas(400, 400);
  slider = createSlider(0, 20, 5, 1);
  total = 200;
  increment = TWO_PI / total;
}

function superShape(phi) {
  var t1 = (1 / a) * cos(phi * m / 4);
  t1 = abs(t1);
  t1 = pow(t1, n2);

  var t2 = 1 / b * sin(phi * m / 4);
  t2 = abs(t2);
  t2 = pow(t2, n3);

  t3 = pow((t1 + t2), 1 / n1);

  if (t3 === 0) {
    return 0;
  }

  return (1 / t3);
}

function draw() {
  m = slider.value()
  translate(width / 2, height / 2);
  background(40);
  stroke(200);

  beginShape();
  for (var phi = 0; phi < TWO_PI; phi += increment) {
    r = superShape(phi);
    x = 100 * r * cos(phi);
    y = 100 * r * sin(phi);
    vertex(x, y);
  }
  endShape(CLOSE);
}