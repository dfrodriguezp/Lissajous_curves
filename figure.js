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
        this.current = createVector();
    }

    show() {
        strokeWeight(1);
        beginShape();
        for (let p of this.path) {
            vertex(p.x, p.y);
        }
        endShape();
    }
}