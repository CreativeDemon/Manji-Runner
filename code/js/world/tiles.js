const Tiles = {
  scrollX: 0,
  currentGrass: "green",
  
  get grass() {
    return Assets.images[this.currentGrass + "_grass"];
  },
  
  draw(ctx) {
    if (!CONFIG.GAME_STARTED) this.scrollX = 0;
    else this.scrollX -= CONFIG.SPEED;
    
    if (this.scrollX <= -CONFIG.TILE) this.scrollX = 0;
    
    for (let x = this.scrollX; x < CONFIG.WIDTH; x += CONFIG.TILE) {
      ctx.drawImage(this.grass, x, CONFIG.HEIGHT - 64, 32, 32);
      ctx.drawImage(Assets.images.dirt, x, CONFIG.HEIGHT - 32, 32, 32);
    }
  }
};

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  Background.update();
  Background.draw(ctx);
  
  Tiles.draw(ctx);
  
  Decoration.drawShop(ctx);
  
  Player.update();
  Player.draw(ctx);
  
  if (!CONFIG.GAME_STARTED) {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#fff";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText("TAP TO START", canvas.width / 2, canvas.height / 2);
    ctx.font = "14px Arial";
    ctx.fillText("Your journey begins at the shop", canvas.width / 2, canvas.height / 2 + 30);
  }
  
  requestAnimationFrame(loop);
}