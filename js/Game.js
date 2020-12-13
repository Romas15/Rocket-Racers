class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    player1 = createSprite(100, 200, 1, 1);
    //player1.scale = 0.5;
    player2 = createSprite(300, 200, 1, 1);
    // player2.scale = 0.5;
    player3 = createSprite(500, 200, 1, 1);
    // player3.scale = 0.5;
    player4 = createSprite(700, 200, 1, 1);

    overimage = createSprite(700, 1540);
    overimage.addImage(lose);
    overimage.scale = 2.5;
    // player4.scale = 0.5;

    players = [player1, player2, player3, player4];

    // asteroid = createSprite(900, 40);

    // asteroid.addImage(asteroidIMAGE);
    // asteroid.scale = 0.6;
    // // asteroid.velocityX = 4;
    // asteroid.velocityY = 8;
    // asteroid.velocityX = -8;
  }

  play() {
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      var index = 0;
      var x = 0;
      var y;

      for (var plr in allPlayers) {
        index = index + 1;
        form.display();

        x = x + 280;
        // asteroid.y = allPlayers[plr].distance + 200;

        // console.log(player.index);
        console.log(player4.y);
        console.log(player.distance);
        y = displayHeight - allPlayers[plr].distance;

        players[index - 1].x = x;
        players[index - 1].y = y;
        console.log(players[index - 1].y);
        players[index - 1].scale = 0.35;
        players[index - 1].addImage(playerOTHER);

        if (players[index - 1].y === -2950) {
          console.log("eh");
          camera.position.y = 1540;
          background(lose);
        }

        // if (gameState === "WIN") {
        //   console.log("YOU LOSE!! Better Luck Next Time!"); //, 200, 300);
        // }

        // textSize(15);
        // text("Name : " + allPlayers[plr].name, 400, 300);

        // if (player4.y === -2950 || player1.y === -2950 || player2.y === -2950) {

        //   }

        // if ((player[index - 1] = player1)) {
        //   console.log("f");
        // }
        // console.log(player.distance);
        // console.log(gameState);

        if (index === player.index) {
          // if ((players[index - 1].x = asteroidX)) {
          //   players[index - 1].addImage(bang);
          // }
          // if (players[index - 1].isTouching(asteroid)) {
          //   text("STOP", 400, 250, 30, 30);
          // }

          players[index - 1].addImage(playerYOU);
          camera.position.x = displayWidth / 2;
          camera.position.y = players[index - 1].y;
          console.log(camera.position.y);
          if (camera.position.y === -2950) {
            gameState = 3;
          }
        }
      }
    }

    if (
      keyIsDown(UP_ARROW) &&
      player.index !== null &&
      player.distance !== 3850
    ) {
      player.distance += 50;
      player.update();
    }

    // if (gameState === 3 && index !== player.index) {
    //   gameState = 4;
    // } //(player.distance !== 3860)

    if (player.distance > 3850) {
      gameState = 3;
      player1.visible = false;
      player2.visible = false;
      player3.visible = false;
      player4.visible = false;

      if (index !== player.index) {
        player1.y === 1540;
        player2.y === 1540;
        player3.y === 1540;
        player4.y === 1540;
      }
    }

    // //if (player.distance <)
    if (camera.position.y > -2950) {
      player1.y === 1540;
      player2.y === 1540;
      player3.y === 1540;
      player4.y === 1540;
    }
  }
}
