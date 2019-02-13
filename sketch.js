let osc1;
let osc2;
let figure;
let angle;
let m = 1;
let n = 4;

function setup() {
    createCanvas(600, 600);
    angle = PI;
    osc1 = new Oscillator(150, 400, 100, -0.01*n, angle);
    osc2 = new Oscillator(400, 150, 100, -0.01*m,  angle);
    figure = new Figure();
}


function draw() {
    background(0);
    osc1.show();
    osc2.show();
    osc1.update();
    osc2.update();
    figure.setX(osc2.x);
    figure.setY(osc1.y);
    figure.addPoint();
    figure.show();

    if (osc1.phi <= -n*(TWO_PI - angle) && osc2.phi <= -m*(TWO_PI - angle)) {
        osc1.phi = angle;
        osc2.phi = angle;
        figure.path = [];
    }

    strokeWeight(1);
    stroke(255, 100);
    line(osc1.x, osc1.y, osc2.x, osc1.y);
    line(osc2.x, osc1.y, osc2.x, osc2.y);
    strokeWeight(5);
    stroke(255, 200);
    point(osc2.x, osc1.y);
}