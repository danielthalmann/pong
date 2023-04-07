
export class vector
{
    x: number = 0.0;
    y: number = 0.0;

    constructor(_x: number|null, _y: number|null)
    {
        this.x = _x || 0.0;
        this.y = _y || 0.0;
    }

    log() : vector {
        console.log('vector', this.x, this.y);
        return this;
    }

    normalize(): vector {
        const xy = (this.x + this.y);
        this.x /= xy;
        this.y /= xy;
        return this;
    }

    add (vect : vector)
    {
        this.x += vect.x;
        this.y += vect.y;
        return this;
    }
    sub (vect : vector)
    {
        this.x -= vect.x;
        this.y -= vect.y;
        return this;
    }

    scalarMulti(val : number)
    {
        this.x *= val;
        this.y *= val;
        return this;
    }

    copy() : vector
    {
        return new vector(this.x, this.y);
    }
    up() : vector
    {
        return new vector(0.0, -1.0);
    }
    down() : vector
    {
        return new vector(0.0, 1.0);
    }
    left() : vector
    {
        return new vector(-1.0, 0.0);
    }
    right() : vector
    {
        return new vector(1.0, 0.0);
    }
}
