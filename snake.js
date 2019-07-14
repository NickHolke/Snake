class Snake {
  constructor() {
    this.xdir = 0;
    this.ydir = 0;
    this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
  }

  get score() {
    return this.body.length;
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

  eat(food) {
    let head = this.body[this.body.length - 1];
    if (food.x === head.x && food.y === head.y) {
      return true;
    }
    return false;
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.body.unshift(head);
  }

  gameOver() {
    let head = this.body[this.body.length - 1];
    if (head.x > w-1 || head.x < 0 || head.y > h - 1 || head.y < 0) {
      return true;
    }

    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (head.x === part.x && head.y === part.y) {
        return true;
      }
    }
    return false;
  }
}