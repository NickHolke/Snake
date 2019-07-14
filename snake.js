class Snake {
  constructor() {
    this.xdir = 0;
    this.ydir = 0;
    this.body = [];
    this.body[0] = createVector(0, 0);
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      noStroke();
      fill(51);
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

  setDir(x,y) {
    this.xdir = x;
    this.ydir = y;
  }
}