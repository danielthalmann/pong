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
    timer : Timer = new Timer();
    player1 : Player;
    player2 : Player;
    ball : Ball;

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

        this.player1 = new Player(1, new Size(this.canvas.width, this.canvas.height), this.timer);
        this.player2 = new Player(2, new Size(this.canvas.width, this.canvas.height), this.timer);
        this.ball = new Ball(new Size(this.canvas.width, this.canvas.height), this.timer);
    }

    run() : void
    {
        console.log("run");

        this.init();
        
        loop();
    }

    init() : void
    {
      
        const sphere : Sphere = new Sphere();
        sphere.setRadius(15.0);
        sphere.setPosition(50.0, 50.0);
        sphere.setColor('white');

        const rectangle : Rectangle = new Rectangle();
        rectangle.setSize(20.0, 100.0);
        rectangle.setPosition(10.0, 10.0);
        rectangle.setColor('white');

        this.ball.setPosition(10.0, 10.0);

        this.meshes.push(this.ball);
        this.meshes.push(this.player1);
        this.meshes.push(this.player2);
    }

    update () : void
    {
        this.timer.tick();

        this.player1.update(this.keyboard);
        // this.player2.update(this.keyboard);

        this.ball.update();
    }

    checkColision(meshA : Mesh, meshB : Mesh, newPos : Vector, bounce : number) : Vector
    {
        let testPos;

        testPos = newPos.copy();
        testPos.y = 0.0;
        if (meshA.onCollide(meshB, testPos))
            newPos.x = -(newPos.x) * bounce;

        testPos = newPos.copy();
        testPos.x = 0.0;
        if (meshA.onCollide(meshB, testPos))
            newPos.y = -(newPos.y) * bounce;

        return newPos.copy();
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
