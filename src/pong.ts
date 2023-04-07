import Keyboard from './keyboard.js';
import Mesh from './mesh.js';
import Sphere from './sphere.js';
import Rectangle from './rectangle.js';
import Timer from './timer.js';
import Vector from './vector.js';
import Player from './player.js';
import Ball from './ball.js';
import Size from './size.js';


class Pong
{
    context : CanvasRenderingContext2D;
    canvas : HTMLCanvasElement;
    keyboard : Keyboard = new Keyboard();
    meshes : Array<Mesh> = [];
    colliders : Array<Mesh> = [];
    timer : Timer = new Timer();
    player1 : Player;
    player2 : Player;
    ball : Ball;
    size : Size;

    constructor()
    {
        let _canvas : HTMLCanvasElement|null = <HTMLCanvasElement> document.getElementById('pong');
        if (!_canvas) {
            throw "canvas pong is not present on page";
        }
        if (!_canvas.getContext) {
            throw "The context cannot be initialized";
        }
        let _context : CanvasRenderingContext2D|null = _canvas.getContext('2d');
        if (_context === null) {
            throw "The context cannot be initialized";
        }
        this.canvas = _canvas;
        this.context = _context;

        this.size = new Size(this.canvas.width, this.canvas.height);

        this.player1 = new Player(this.size, this.timer);
        this.player2 = new Player(this.size, this.timer);
        this.ball = new Ball(this.size, this.timer);

        let gutter : number = 20.0;

        this.player1.setPosition(gutter, 10.0);
        this.player1.setColor('red');

        this.player2.setPosition(this.size.w - gutter - this.player2.size.w, this.size.h - this.player2.size.h - 10.0);
        this.player2.setColor('yellow');
        
        const rect_top : Rectangle = new Rectangle();
        rect_top.setSize(this.canvas.width - 20.0, 10.0);
        rect_top.setPosition(10.0, 10.0);
        rect_top.setColor('white');

        this.colliders.push(rect_top);

        const rect_bottom : Rectangle = new Rectangle();
        rect_bottom.setSize(this.canvas.width - 20.0, 10.0);
        rect_bottom.setPosition(10.0, this.size.h - 30.0);
        rect_bottom.setColor('white');

        this.colliders.push(rect_bottom);

        this.colliders.push(this.player1);
        this.colliders.push(this.player2);

        this.meshes.push(rect_top);
        this.meshes.push(rect_bottom);   
        this.meshes.push(this.ball);
        this.meshes.push(this.player1);
        this.meshes.push(this.player2);

    }

    run() : void
    {
        console.log("run");

        this.init();
        
        loop();
    }

    init() : void
    {
        this.ball.setPosition(50.0, 50.0);
    }

    update () : void
    {
        this.timer.tick();

        this.player1.update(this.keyboard);
        this.player2.update(this.keyboard);

        for (let index = 0; index < this.colliders.length; index++) {
            const mesh = this.colliders[index];
            this.checkBallCollision(mesh);
        }

        this.ball.update();

    }

    checkBallCollision(meshB : Mesh) : void
    {
        let newPos : Vector = this.ball.getNextPosition();
        let testPos : Vector;

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

    draw () : void 
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let index = 0; index < this.meshes.length; index++) {
            const mesh = this.meshes[index];
            mesh.draw(this.context);
        }    
    }
}

function loop() : void
{
    pong.update();
    pong.draw();

    window.requestAnimationFrame(loop);
}

var pong : Pong = new Pong();
pong.run();
