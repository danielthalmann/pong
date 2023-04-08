import Mesh from './mesh.js';
export default class Text extends Mesh {
    constructor() {
        super();
        this.content = 'Text 1';
        this.color = 'orange';
        this.name = 'sphere';
        this.font = 'Courier New';
        this.font_size = 48;
    }
    draw(context) {
        context.fillStyle = this.color;
        context.font = this.font_size + 'px ' + this.font;
        console.log(this.position);
        context.fillText(this.content, this.position.x, this.position.y);
    }
}
//# sourceMappingURL=text.js.map