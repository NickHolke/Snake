let snake;
let rez = 20;
let w;
let h;
let food;

function setup() {
  createCanvas(600,600);
  snake = new Snake();
  frameRate(7);
  w = floor(width/rez);
  h = floor(height/rez);
  makeFood();
}

function makeFood() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x,y);
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
  if (snake.eat(food)) {
    makeFood();
    snake.grow();
  }

  snake.update();
  snake.show();

  noStroke();
  fill('red');
  rect(food.x, food.y, 1, 1);
}