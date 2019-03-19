'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    get x() { return `${this.x}` }
    set x(nx) { if (nx > 0) this.x = Object.assign({}, nx); }
}

/* class Circle extends Piont {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
    move(dx, dy, dr) {
        super.move(dx, dy);
        this.r = dr;
    }
}
var c1 = new Circle(1, 2, 3);
console.log(c1);
*/
var p1 = new Point(123, 10);
console.log(p1);

