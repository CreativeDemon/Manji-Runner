const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

/* ================== LOAD ASSETS ================== */
Assets.loadImages({
  // Characters
  player: "assets/images/characters/player.png",
  
  // Backgrounds
  bg_far: "assets/images/background/bg_far.png",
  bg_mid: "assets/images/background/bg_mid.png",
  bg_near: "assets/images/background/bg_near.png",
  
  // Tiles
  dirt: "assets/images/tiles/dirt.png",
  green_grass: "assets/images/tiles/green_grass.png",
  snow_grass: "assets/images/tiles/snow_grass.png",
  yellow_grass: "assets/images/tiles/yellow_grass.png",
  
  // Decorations
  shop: "assets/images/decorations/shop.png"
  
}, start);

/* ================== LOAD SOUNDS ================== */
Assets.loadSounds({
  jump: "assets/sounds/jump.mp3",
  bgm: "assets/sounds/bgm.mp3",
  hit: "assets/sounds/hit.mp3",
  coin: "assets/sounds/coin.mp3"
});

/* ================== START GAME ================== */
function start() {
  // Do NOT autoplay sound here (browser restriction)
  requestAnimationFrame(loop);
}

/* ================== MAIN LOOP ================== */
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Background
  Background.update();
  Background.draw(ctx);
  
  // Shop always drawn before tiles
  Decoration.drawShop(ctx);
  
  // Tiles
  Tiles.draw(ctx);
  
  // Player
  Player.update();
  Player.draw(ctx);
  
  // Start overlay (does NOT erase shop/player)
  if (!CONFIG.GAME_STARTED) {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#ffffff";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText("TAP TO START", canvas.width / 2, canvas.height / 2);
    
    ctx.font = "14px Arial";
    ctx.fillText(
      "Your journey begins at the shop",
      canvas.width / 2,
      canvas.height / 2 + 28
    );
  }
  
  requestAnimationFrame(loop);
}