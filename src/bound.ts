class bound 
{
    left : number = 0.0;
    top : number = 0.0;
    right : number = 0.0;
    bottom : number = 0.0;

    constructor (_left : number | null, _top : number | null, _right : number | null, _bottom : number | null) {

        this.left = _left || 0.0;
        this.top = _top || 0.0;
        this.right = _right || 0.0;
        this.bottom = _bottom || 0.0;

    }

    inBound (b : bound) {
        let collision = false;
        if (this.right >= b.left 
          && this.left <= b.right 
          && this.bottom >= b.top 
          && this.top <= b.bottom)
            collision = true;
        return collision;

    }

}
