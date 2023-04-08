import Mesh from './mesh.js';

export default class Text extends Mesh
{

    font : string;
    font_size : number;
    content : string = 'Text 1';

    constructor()
    {
        super();
        this.color = 'white';
        this.name = 'sphere';
        this.font = 'Courier New';
        this.font_size = 48;
    }

    draw(context : CanvasRenderingContext2D): void 
    {
        context.fillStyle = this.color;
        context.font = this.font_size + 'px ' + this.font;
        console.log(this.position);
        context.fillText(this.content, this.position.x, this.position.y);
    }

}
