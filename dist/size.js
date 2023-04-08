import Vector from './vector.js';
export default class Size {
    constructor(_w, _h) {
        this.w = 0.0;
        this.h = 0.0;
        this.w = _w || 0.0;
        this.h = _h || 0.0;
    }
    log() {
        console.log('Size', this.w, this.h);
        return this;
    }
    normalize() {
        const wh = (this.w + this.h);
        this.w /= wh;
        this.h /= wh;
        return this;
    }
    add(vect) {
        this.w += vect.w;
        this.h += vect.h;
        return this;
    }
    sub(vect) {
        this.w -= vect.w;
        this.h -= vect.h;
        return this;
    }
    scalarMulti(val) {
        this.w *= val;
        this.h *= val;
        return this;
    }
    copy() {
        return new Size(this.w, this.h);
    }
    toVector() {
        return new Vector(this.w, this.h);
    }
}
//# sourceMappingURL=size.js.map