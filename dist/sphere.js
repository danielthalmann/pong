import Mesh from './mesh.js';
import Size from './size.js';
export default class Sphere extends Mesh {
    constructor(_radius) {
        super();
        this.radius = 0;
        if (typeof _radius === 'number') {
            this.setRadius(_radius);
        }
        this.color = 'orange';
        this.name = 'sphere';
    }
    setRadius(_radius) {
        this.radius = _radius;
        this.setSize(new Size(_radius, _radius));
    }
    draw(context) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
    }
}
//# sourceMappingURL=sphere.js.map