let angle = 0;
let cols = 7;
let rows = 7;
let oscX = [];
let oscY = [];
let figures = [];
let d;
let colors = [];
let phase;

function setup() {
    createCanvas(800, 800);
    d = width / (cols + 1);
    // phase = 0;
    phase = random(TWO_PI);
    console.log(phase);
    for (let i = 0; i < cols; i++) {
        oscX.push(new Oscillator(d + i * d + d/2, d / 2, d*0.8, angle, phase));
        let r = random(256);
        let g = random(256);
        let b = random(256);
        colors.push(color(r, g, b));
    }

    for (let j = 0; j < rows; j++) {
        oscY.push(new Oscillator(d / 2, d + j * d + d/2, d*0.8, angle, phase));
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
        strokeWeight(1);
        textFont("Arial");
        textSize(32);
        textAlign(CENTER, CENTER);
        stroke(255);
        fill(255);
        text(""+(i + 1), o.pos.x, o.pos.y);
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
        strokeWeight(1);
        textFont("Arial");
        textSize(32);
        textAlign(CENTER, CENTER);
        stroke(255);
        fill(255);
        text(""+(j + 1), o.pos.x, o.pos.y);
        stroke(colors[j]);
        o.show();
        o.update(angle * (j + 1));
        strokeWeight(1);
        stroke(colors[j], 100);
        line(o.x, o.y, oscX[oscX.length-1].x, o.y);
        for (let i = 0; i < rows; i++) {
            figures[index(i, j)].setY(o.y);
        }
    }

    for (let f of figures) {
        f.addPoint();
        f.show();
    }

    if (angle <= -TWO_PI) {
        for (let f of figures) {
            f.path = [];
        }
        angle = 0;
        // phase = 0;
        phase = random(TWO_PI);
        console.log(phase);
        for (let o of oscX.concat(oscY)) {
            o.phase = phase;
        }
        // noLoop();
    }
    angle -= 0.015;
}

function index(i, j) {
    return (i + j * rows);
}