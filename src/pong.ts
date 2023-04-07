
class pong
{
    ctx : CanvasRenderingContext2D | null;

    constructor()
    {
        let canvas : HTMLCanvasElement|null = <HTMLCanvasElement> document.getElementById('pong');

        if (!canvas) {
            throw "canvas pong is not present on page";
        }
        if (!canvas.getContext) {
            throw "The context cannot be initialized";
        }
        this.ctx = canvas.getContext('2d');
        if (this.ctx) {
            throw "The context cannot be initialized";
        }

    }

    loop() {

        this.update();

        this.draw();

        window.requestAnimationFrame(this.loop);
    
    }

    run() 
    {
        console.log("run");
        
        this.loop();

    }

    update ()
    {

    }

    draw () 
    {

    }
}


let p : pong = new pong();

p.run();