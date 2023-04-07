
import Rectangle from './rectangle.js';
import Timer from './timer.js';
import Keyboard from './keyboard.js';
import Vector from './vector.js';
import Size from './size.js';


export default class Player extends Rectangle
{
    speed : number = 200.0;
    canvas : Size;
    timer : Timer;

    constructor(pnum : number, _canvas : Size, _timer : Timer)
    {
        super();
        this.canvas = _canvas;
        this.timer = _timer;
        this.setSize(10.0, 80.0);
        if (pnum == 1) {
            this.setPosition(10.0, 10.0);
            this.color = 'red';
        } else {
            this.setPosition(this.canvas.w - 20.0, this.canvas.h - this.size.h - 10.0);
            this.color = 'yellow';
        }
    }

    update(keyboard : Keyboard) : void
    {
        const new_pos : Vector = this.position.copy();

        if (keyboard.up) {
            let value : number = this.speed * this.timer.delta;
            console.log(this.timer.delta);
            new_pos.add((new Vector).up().scalarMulti(this.speed * this.timer.delta));
        }

        if (keyboard.down) {
            let value : number = this.speed * this.timer.delta;
            console.log(value);
            new_pos.add((new Vector).down().scalarMulti(this.speed * this.timer.delta));
        }

        if (new_pos.y < 0) {
            new_pos.y = 0;
        }

        if (new_pos.y + this.size.h > this.canvas.h) {
            new_pos.y = this.canvas.h - this.size.h;
        }

        this.setPosition(new_pos);
    }

}
