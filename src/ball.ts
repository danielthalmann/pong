import Rectangle from './rectangle.js';
import Timer from './timer.js';
import Size from './size.js';
import Vector from './vector.js';

export default class Ball extends Rectangle
{
    canvas : Size;
    timer : Timer;
    speed : number = 250.0;

    vector : Vector = new Vector();

    constructor(_canvas : Size, _timer : Timer)
    {
        super();
        this.canvas = _canvas;
        this.timer = _timer;

        this.setSize(10.0, 10.0);
        this.color = 'white';

        this.vector.x = -.5;
        this.vector.y = -.8;
        this.vector.normalize();
    }

    update() : void
    {
        const new_pos : Vector = this.vector.copy().scalarMulti(this.speed * this.timer.delta);
        const radius = 0;

        let info : HTMLElement | null = document.getElementById("info");
        if(info != null)
            info.innerHTML = <string> 'content : x : ' + Math.round(this.position.x) + ' y : ' + Math.round(this.position.y);

        if (this.position.y + new_pos.y + this.size.h > this.canvas.h || this.position.y + new_pos.y < 0) {
            this.vector.y = -(this.vector.y);
        }
    
        if (this.position.x + new_pos.x + this.size.w > this.canvas.w || this.position.x + new_pos.x < 0) {
            this.vector.x = -(this.vector.x);
        }
        
        this.position.add(new_pos);
    }
    
}