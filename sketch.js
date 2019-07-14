let snake;
let rez = 20;

function setup() {
  createCanvas(600,600);
  snake = new Snake();
  frameRate(7);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && snake.xdir !== 1) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW && snake.xdir !== -1) {
    snake.setDir(1,0);
  } else if (keyCode === UP_ARROW && snake.ydir !== 1) {
    snake.setDir(0,-1);
  } else if (keyCode === DOWN_ARROW && snake.ydir !== -1) {
    snake.setDir(0,1);
  }
}

function draw() {
  scale(rez);
  background(220);
  keyPressed();

  snake.update();
  snake.show();
}