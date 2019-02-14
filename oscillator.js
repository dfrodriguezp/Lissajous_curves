class Oscillator {
    constructor(x, y, diameter, angle) {
        this.pos = createVector(x, y);
        this.d = diameter;
        this.phi = angle;
        this.x = this.pos.x + (this.d / 2) * cos(this.phi);
        this.y = this.pos.y + (this.d / 2) * sin(this.phi);
    }

    update(angle) {
        this.phi = angle;
        this.x = this.pos.x + (this.d / 2) * cos(this.phi);
        this.y = this.pos.y + (this.d / 2) * sin(this.phi);
    }

    show() {
        strokeWeight(2);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.d);
        strokeWeight(8);
        point(this.x, this.y);
    }
}