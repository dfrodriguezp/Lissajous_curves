class Oscillator {
    constructor(x, y, radius, velocity, angle) {
        this.pos = createVector(x, y);
        this.r = radius;
        this.w = velocity;
        this.phi = angle;
        this.x = this.pos.x + this.r * cos(this.phi);
        this.y = this.pos.y + this.r * sin(this.phi);
    }

    update() {
        this.phi += this.w;
        this.x = this.pos.x + this.r * cos(this.phi);
        this.y = this.pos.y + this.r * sin(this.phi);
    }

    show() {
        strokeWeight(1);
        stroke(255);
        noFill();
        ellipse(this.pos.x, this.pos.y, 2*this.r);
        strokeWeight(8);
        point(this.x, this.y)
    }
}