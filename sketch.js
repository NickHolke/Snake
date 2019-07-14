let snake;
let rez = 20;
let w;
let h;
let food;
let score;

function setup() {
  createCanvas(600,600);
  resetSketch();
}

function resetSketch() {
  w = floor(width/rez);
  h = floor(height/rez);
  snake = new Snake();
  frameRate(7);
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
  if (snake.gameOver()) {
    score = snake.score;
    alert(`Game Over. Your score is: ${score}`);
    resetSketch();
  }

  noStroke();
  fill('red');
  rect(food.x, food.y, 1, 1);
}