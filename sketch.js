var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var asteroid;
var form, player, game;
var players, player1, player2, player3, player4, background1;
var background2, asteroidIMAGE;
var playerYOU, playerOTHER, bang, win, lose, winState, overimage;
var backgroundTEMP, asteroidSelect, galaxyIMAGE, asteroid2, galaxyANIMATION;
var asteroidX;
function preload() {
  background1 = loadImage("background.png");
  playerYOU = loadImage("roket.png");
  asteroidIMAGE = loadImage("asteroidIMAGE.png");
  galaxyIMAGE = loadImage("galaxy pixelart.png");
  playerOTHER = loadImage("others.png");
  bang = loadImage("bang.png");
  lose = loadImage("lose.png");
  galaxyANIMATION = loadImage("galaxy.png");
  win = loadImage("win.jpg");
}
function setup() {
  canvas = createCanvas(displayWidth - 30, displayHeight - 135);
  database = firebase.database();
  game = new Game();
  game.getState();

  game.start();
}

function draw() {
  if (playerCount < 4) {
    background(galaxyANIMATION);
  }
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
    background(background1);
  }
  // if (gameState === 3) {
  //   background(win);
  // }

  if (gameState === 3) {
    background(win);
  }

  if (gameState === 4) {
    background(lose);
  }

  // if (asteroid.x < 0) {
  //   asteroid = createSprite(-100, 20);
  //   asteroid.addImage(asteroidIMAGE);
  //   asteroid.scale = 0.8;
  //   asteroid.velocityX = 8;
  //   asteroid.velocityY = 8;
  // }
  // if (gameState !== 1) {
  //   background(galaxyIMAGE);
  // }
  //console.log(gameState);

  drawSprites();
}
