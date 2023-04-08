import Mesh from './mesh.js';
import Size from './size.js';
export default class Rectangle extends Mesh {
    constructor(_w, _h) {
        super();
        if (typeof _w === 'number' && typeof _h === 'number') {
            this.setSize(new Size(_w, _h));
        }
        this.color = 'orange';
        this.name = 'sphere';
    }
    draw(context) {
        context.beginPath();
        context.rect(this.position.x, this.position.y, this.size.w, this.size.h);
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
    }
}
//# sourceMappingURL=rectangle.js.map