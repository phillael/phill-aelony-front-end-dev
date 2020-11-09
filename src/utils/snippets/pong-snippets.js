export const gameFlowSnippet = `// select canvas element
const canvas = document.getElementById("pong");

// getContext gives you methods and properties to work with the canvas
const ctx = canvas.getContext("2d");
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

function loop() {
  ctx.clearRect(0, 0, width, height);
  render();
  moveAlpaca();
  update();
  requestAnimationFrame(loop);
}

function startGame() {
  gameStarted = true;
  requestAnimationFrame(loop);
  canvas.removeEventListener("click", startGame);
  canvas.addEventListener("click", ballInit);
  playing = true;
  round++;
  playSong();
}

function gameEnd() {
  playing = false;
  gameOver = true;
  round = 0;
  alpaca.score > com.score
    ? (winner = "Alpaca")
    : (winner = "The rectangle thing");
}

function restartGame() {
  playing = true
  gameOver = false
  round = 1
  alpaca.score = 0
  com.score = 0
  alpaca.speed = 8
  ball.speed = 7
}
`

export const stateSnippet = `function update() {
  // Animate alpaca!
  if (left) {
    if (alpaca.frameCount % alpaca.frameRate === 0) alpaca.currentFrame--;
    if (alpaca.currentFrame <= 0)
      alpaca.currentFrame = alpaca.numberOfFrames - 1;
    alpaca.frameCount++;
  } else {
    if (alpaca.frameCount % alpaca.frameRate === 0) alpaca.currentFrame++;
    if (alpaca.currentFrame >= alpaca.numberOfFrames) alpaca.currentFrame = 0;
    alpaca.frameCount++;
  }
  //attack animation
  if (attack) {
    alpaca.sy = 240;
  } else {
    idle = true;
  }

  if (attack && alpaca.currentFrame > 6) {
    attack = false;
    alpaca.sy = 0;
  }

  // move from top of screen to bottom and vice versa
  if (alpaca.y < -100) alpaca.y = height;
  if (alpaca.y > height + 100) alpaca.y = 0;
  // left and right boundries for alpaca;
  if (alpaca.x <= -50) alpaca.x = -50;
  if (alpaca.x >= width / 2 - 80) alpaca.x = width / 2 - 80;
}

//gameflow vars
let playing = false,
  round = 0,
  gameStarted = false,
  gameOver = false,
  winner = "",
  money = 0;

document.addEventListener("keydown", handleKeydown, false);
document.addEventListener("keyup", handleKeyup, false);

// for smoother keydown and keyup movements
let up = false,
  down = false,
  left = false,
  right = false,
  idle = true,
  run = false,
  attack = false;

  function handleKeydown(e) {
  //down or up?
  if (e.keyCode == 40) {
    down = true;
    if (alpaca.sy === 0) alpaca.sy = 120;
  } else if (e.keyCode == 38) {
    up = true;
    if (alpaca.sy === 0) alpaca.sy = 120;
  }
  //left or right?
  if (e.keyCode == 37) {
    left = true;
    if (!attack) alpaca.sy = 480;
    if (attack) alpaca.sy = 240;
  } else if (e.keyCode == 39) {
    right = true;
    if (!attack) alpaca.sy = 120;
  }
  //is space bar down?
  if (e.keyCode == 32) {
    //space bar starts the game and is the attack button
    if (gameOver) {
      restartGame();
    }
    if (!gameStarted) {
      startGame();
    } else {
      if (!attack) alpaca.currentFrame = 0;
      attack = true;
      playing && sword.play();
    }
  }
  `
export const collisionSnippet = `function collision(b, p) {
  //account for width and height of player sprite
  if (ball.x < width / 2) {
    p.top = p.y + 40;
    p.bottom = p.y + p.height + 15;
    //account for width of player sprite
    p.left = p.x + 40;
    p.right = p.x + p.width + 40;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
  } else {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
  }

  return (
    p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top
  );
}

// if the ball hits a paddle
  if (collision(ball, player)) {
    // play sound depending on player
    player === alpaca ? alpacaHit.play() : comHit.play();

    // we check where the ball hits the paddle
    let collidePoint = ball.y - (player.y + player.height / 2);
    // normalize the value of collidePoint, we need to get numbers between -1 and 1.
    // -player.height/2 < collide Point < player.height/2
    collidePoint = collidePoint / (player.height / 2);

    // when the ball hits the top of a paddle we want the ball, to take a -45degees angle
    // when the ball hits the center of the paddle we want the ball to take a 0degrees angle
    // when the ball hits the bottom of the paddle we want the ball to take a 45degrees
    // Math.PI/4 = 45degrees
    let angleRad = (Math.PI / 4) * collidePoint;

    // speed up the ball everytime a paddle hits it.
    if (attack && player.isPlayer) {
      ball.speed += 5;
    } else {
      ball.speed += 1;
    }

    // change the X and Y velocity direction
    let direction = ball.x + ball.radius < canvas.width / 2 ? 1 : -1;
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);
  }
}
`
