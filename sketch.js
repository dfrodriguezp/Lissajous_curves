let angle = 0;
let cols = 5;
let rows = 5;
let oscX = [];
let oscY = [];
let figures = [];
let d;
let colors = [];

function setup() {
    createCanvas(600, 600);
    d = width / (cols + 1);

    for (let i = 0; i < cols; i++) {
        oscX.push(new Oscillator(d + i * d + d/2, d / 2, d*0.8, angle));
        let r = random(256);
        let g = random(256);
        let b = random(256);
        colors.push(color(r, g, b));
    }

    for (let j = 0; j < rows; j++) {
        oscY.push(new Oscillator(d / 2, d + j * d + d/2, d*0.8, angle));
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            figures.push(new Figure());
        }
    }
}


function draw() {
    background(41);

    for (let i = 0; i < cols; i++) {
        o = oscX[i];
        stroke(colors[i]);
        o.show();
        o.update(angle * (i + 1));
        strokeWeight(1);
        stroke(colors[i], 100);
        line(o.x, o.y, o.x, oscY[oscY.length-1].y);
        for (let j = 0; j < rows; j++) {
            figures[index(i, j)].setX(o.x);
        }
    }

    for (let j = 0; j < rows; j++) {
        o = oscY[j];
        stroke(colors[j]);
        o.show();
        o.update(-angle * (j + 1));
        strokeWeight(1);
        stroke(colors[j], 100);
        line(o.x, o.y, oscX[oscX.length-1].x, o.y);
        for (let i = 0; i < rows; i++) {
            figures[index(i, j)].setY(o.y);
        }
    }

    angle -= 0.015;
    for (let f of figures) {
        f.addPoint();
        f.show();
    }

    if (angle <= -TWO_PI) {
        for (let f of figures) {
            f.path = [];
        }
        angle = 0;
    }
    // noLoop();
}

function index(i, j) {
    return (i + j * rows);
}