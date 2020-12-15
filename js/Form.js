class Form {
  constructor() {
    this.button = createButton("Play");
   this.reset = createButton("Reset");
    this.title = createElement("h1");
  }

  hide() {
    this.button.hide();
    this.title.hide();
  }

  display() {
    this.title.html("Rocket-Racer");
    this.title.position(displayWidth / 2 - 120, 330);

    this.button.position(displayWidth / 2 - 50, displayHeight / 2 - 50);
    
     this.reset.position(displayWidth / 2 - 700, displayHeight / 2 - 400);

    this.reset.mousePressed(() => {
      game.update(0);
      player.updateCount(0);
    });

    this.button.mousePressed(() => {
      this.button.hide();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });
  }
}
