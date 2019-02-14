class Figure {
    constructor() {
        this.path = [];
        this.current = createVector();
    }

    setX(x) {
        this.current.x = x;
    }

    setY(y) {
        this.current.y = y;
    }

    addPoint() {
        this.path.push(this.current);
    }

    show() {
        strokeWeight(2);
        stroke(255);
        beginShape();
        for (let p of this.path) {
            vertex(p.x, p.y);
        }
        endShape();
        strokeWeight(5);
        stroke(255, 200);
        point(this.current.x, this.current.y);
        this.current = createVector();
    }
}