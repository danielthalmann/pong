import Vector from "./vector.js";
import Size from "./size.js";
import Bound from "./bound.js";
export default class Mesh {
    constructor() {
        this.position = new Vector();
        this.size = new Size();
        this.collider = new Bound();
        this.gravity = 20;
        this.color = 'blue';
        this.name = 'mesh';
    }
    setPosition(_position, _y) {
        if (typeof _position === 'object') {
            this.position = _position;
        }
        else {
            this.position = new Vector(_position, _y);
        }
        return this;
    }
    setColor(_color) {
        this.color = _color;
        return this;
    }
    setSize(_size, _y) {
        if (typeof _size === 'object') {
            this.size = _size;
        }
        else {
            this.size = new Size(_size, _y);
        }
        return this;
    }
    draw(context) {
    }
    updateGravity(timer) {
        return (new Vector()).down().scalarMulti(this.gravity * timer.delta);
    }
    translate(vect) {
        this.position.add(vect);
        return this;
    }
    getCollider(pos) {
        if (typeof pos === 'undefined') {
            pos = new Vector();
        }
        let lefttop = this.position.copy().add(pos);
        let rightbottom = lefttop.copy().add(this.size.toVector());
        return new Bound(lefttop, rightbottom);
    }
    onCollide(mesh, new_position) {
        return mesh.getCollider().inBound(this.getCollider(new_position));
    }
}
;
//# sourceMappingURL=mesh.js.map