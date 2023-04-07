import timer from "./timer";

class tmesh
{
    x : number = 200.0;
    y : number = 200.0;

    ctx : CanvasRenderingContext2D;
    
    g = 20.81;
    m = 10;
    color = 'blue';

    constructor (_ctx : CanvasRenderingContext2D)
    {
        this.ctx = _ctx;
    }

    draw() 
    {
        
    }

    this.gravity = function() {
        return (new vector()).down().scalarMulti(this.g * timer.delta);
    }

    this.translate = function(vect) {
        this.v = vect;
        this.x += vect.x ;
        this.y += vect.y ;
    }
    
    this.getCollider = function(pos) {

        return new bound(this.x + (pos.x), 
                         this.y + (pos.y), 
                         this.x + this.w + (pos.x), 
                         this.y + this.h + (pos.y));
    }

    this.onCollide = function(mesh, newPos) {
        return mesh.getCollider(new vector()).inBound(this.getCollider(newPos));
    }

};
