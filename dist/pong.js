import Keyboard from './keyboard.js';
import Rectangle from './rectangle.js';
import Timer from './timer.js';
import Player from './player.js';
import Ball from './ball.js';
import Size from './size.js';
import Controller from './controller.js';
import Bound from './bound.js';
import Text from './text.js';
class Pong {
    constructor() {
        this.keyboard = new Keyboard();
        this.meshes = [];
        this.colliders = [];
        this.timer = new Timer();
        this.players = [];
        this.controllers = [];
        this.bounds = [];
        this.status = "wait";
        this.gutter = 20.0;
        let _canvas = document.getElementById('pong');
        if (!_canvas) {
            throw "canvas pong is not present on page";
        }
        if (!_canvas.getContext) {
            throw "The context cannot be initialized";
        }
        let _context = _canvas.getContext('2d');
        if (_context === null) {
            throw "The context cannot be initialized";
        }
        this.canvas = _canvas;
        this.context = _context;
        this.size = new Size(this.canvas.width, this.canvas.height);
        this.ball = new Ball(this.size, this.timer);
        const rect_top = new Rectangle();
        rect_top.setSize(this.canvas.width - 60.0, 10.0);
        rect_top.setPosition(30.0, 10.0);
        rect_top.setColor('white');
        this.colliders.push(rect_top);
        const rect_bottom = new Rectangle();
        rect_bottom.setSize(this.canvas.width - 60.0, 10.0);
        rect_bottom.setPosition(30.0, this.size.h - 20.0);
        rect_bottom.setColor('white');
        this.colliders.push(rect_bottom);
        this.meshes.push(rect_top);
        this.meshes.push(rect_bottom);
        this.meshes.push(this.ball);
        this.controllers.push(new Controller('alpha', this.keyboard));
        this.controllers.push(new Controller('arrow', this.keyboard));
        this.bounds.push(new Bound(0, 0, this.gutter, this.size.h));
        this.bounds.push(new Bound(this.size.w - this.gutter, 0, this.size.w, this.size.h));
        this.addPlayer();
        this.addPlayer();
    }
    addPlayer() {
        let no = '' + this.players.length + 1;
        let player = new Player(no, this.size, this.timer);
        if (this.players.length == 0) {
            player.setPosition(this.gutter, (this.size.h - player.size.h) / 2);
            player.setColor('red');
        }
        else {
            player.setPosition(this.size.w - this.gutter - player.size.w, (this.size.h - player.size.h) / 2);
            player.setColor('yellow');
        }
        this.players.push(player);
        this.meshes.push(player);
        this.colliders.push(player);
    }
    run() {
        console.log("run");
        this.init();
        loop();
    }
    init() {
        this.status = 'wait';
        this.ball.setPosition(this.size.w / 2, this.size.h / 2);
        for (let index = 0; index < this.players.length; index++) {
            const player = this.players[index];
            player.update(this.controllers[index]);
            if (index == 0) {
                player.setPosition(this.gutter, (this.size.h - player.size.h) / 2);
            }
            else {
                player.setPosition(this.size.w - this.gutter - player.size.w, (this.size.h - player.size.h) / 2);
            }
        }
    }
    update() {
        this.timer.tick();
        for (let index = 0; index < this.players.length; index++) {
            const player = this.players[index];
            player.update(this.controllers[index]);
        }
        if (this.status === 'run') {
            for (let index = 0; index < this.bounds.length; index++) {
                const bound = this.bounds[index];
                if (this.ball.getCollider().inBound(bound)) {
                    this.players[1 - index].score++;
                    this.init();
                }
            }
            for (let index = 0; index < this.colliders.length; index++) {
                const mesh = this.colliders[index];
                this.checkBallCollision(mesh);
            }
            this.ball.update();
        }
        if (this.status === 'wait') {
            if (this.keyboard.isKeyDown(' '))
                this.status = 'run';
        }
    }
    checkBallCollision(meshB) {
        let newPos = this.ball.getNextPosition();
        let testPos;
        testPos = newPos.copy();
        testPos.y = 0.0;
        if (this.ball.onCollide(meshB, testPos)) {
            this.ball.vector.x = -(this.ball.vector.x);
        }
        testPos = newPos.copy();
        testPos.x = 0.0;
        if (this.ball.onCollide(meshB, testPos)) {
            this.ball.vector.y = -(this.ball.vector.y);
        }
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    draw() {
        if (this.status === 'wait') {
            for (let index = 0; index < this.players.length; index++) {
                let txt = new Text();
                txt.setPosition(this.size.w / 4 + ((this.size.w / 2) * index), this.size.h / 4);
                txt.content = '' + this.players[index].score;
                txt.draw(this.context);
            }
        }
        for (let index = 0; index < this.meshes.length; index++) {
            const mesh = this.meshes[index];
            mesh.draw(this.context);
        }
    }
}
function loop() {
    pong.update();
    pong.clear();
    pong.draw();
    window.requestAnimationFrame(loop);
}
var pong = new Pong();
pong.run();
//# sourceMappingURL=pong.js.map