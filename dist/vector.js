export default class Vector {
    constructor(_x, _y) {
        this.x = 0.0;
        this.y = 0.0;
        this.x = _x || 0.0;
        this.y = _y || 0.0;
    }
    log() {
        console.log('vector', this.x, this.y);
        return this;
    }
    normalize() {
        const xy = (this.x + this.y);
        this.x /= xy;
        this.y /= xy;
        return this;
    }
    add(vect) {
        this.x += vect.x;
        this.y += vect.y;
        return this;
    }
    sub(vect) {
        this.x -= vect.x;
        this.y -= vect.y;
        return this;
    }
    scalarMulti(val) {
        this.x *= val;
        this.y *= val;
        return this;
    }
    copy() {
        return new Vector(this.x, this.y);
    }
    up() {
        return new Vector(0.0, -1.0);
    }
    down() {
        return new Vector(0.0, 1.0);
    }
    left() {
        return new Vector(-1.0, 0.0);
    }
    right() {
        return new Vector(1.0, 0.0);
    }
}
//# sourceMappingURL=vector.js.map