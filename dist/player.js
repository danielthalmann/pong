import Rectangle from './rectangle.js';
import Vector from './vector.js';
export default class Player extends Rectangle {
    constructor(_name, _canvas, _timer) {
        super();
        this.speed = 300.0;
        this.score = 0;
        this.name = 'player';
        this.canvas = _canvas;
        this.timer = _timer;
        this.name = _name;
        this.setSize(10.0, 80.0);
    }
    update(controller) {
        const new_pos = this.position.copy();
        if (controller.up()) {
            let value = this.speed * this.timer.delta;
            console.log(this.timer.delta);
            new_pos.add((new Vector).up().scalarMulti(this.speed * this.timer.delta));
        }
        if (controller.down()) {
            let value = this.speed * this.timer.delta;
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
//# sourceMappingURL=player.js.map