export default class Bound {
    constructor(_left, _top, _right, _bottom) {
        this.left = 0.0;
        this.top = 0.0;
        this.right = 0.0;
        this.bottom = 0.0;
        if ((typeof _left) === 'object' && (typeof _top) === 'object') {
            console.log(_left);
            this.left = _left.x;
            this.top = _left.y;
            this.right = _top.x;
            this.bottom = _top.y;
        }
        else {
            this.left = _left || 0.0;
            this.top = _top || 0.0;
            this.right = _right || 0.0;
            this.bottom = _bottom || 0.0;
        }
    }
    inBound(b) {
        let collision = false;
        if (this.right >= b.left
            && this.left <= b.right
            && this.bottom >= b.top
            && this.top <= b.bottom)
            collision = true;
        return collision;
    }
}
//# sourceMappingURL=bound.js.map