

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.X += dx;
    this.Y += dy;
  }

  get X() {
    return this.x;
  }

  set X(nx) {
    if (nx > 0) this.x = nx;
  }

  get Y() {
    return this.y;
  }

  set Y(ny) {
    if (ny > 0) this.y = ny;
  }
}

class Circle extends Point {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }

  move(dx, dy, dr) {
    super.move(dx, dy);
    this.r = dr;
  }
}
const c1 = new Circle(1, 2, 3);
c1.X = 2;
console.log(c1);
c1.X = -2;
console.log(c1);
c1.move(20, -30, 10);
console.log(c1);
