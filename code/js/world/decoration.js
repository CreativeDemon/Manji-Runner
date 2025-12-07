const Decoration = {
  shopFrame: 0,
  frameTimer: 0,
  
  x: 40, // starting X
  exitSpeed: 4, // how fast shop moves out
  exiting: false, // becomes true after game starts
  
  drawShop(ctx) {
    // Animate shop sprite
    this.frameTimer++;
    if (this.frameTimer % 10 === 0) {
      this.shopFrame++;
      if (this.shopFrame >= 6) this.shopFrame = 0;
    }
    
    // Move shop out when game starts
    if (this.exiting) {
      this.x -= this.exitSpeed;
    }
    
    const frameW = 118;
    const frameH = 128;
    
    const drawW = 180;
    const drawH = 195;
    
    const y = CONFIG.HEIGHT - 64 - drawH;
    
    // Stop drawing once fully off screen
    if (this.x + drawW < 0) return;
    
    ctx.drawImage(
      Assets.images.shop,
      this.shopFrame * frameW,
      0,
      frameW,
      frameH,
      this.x,
      y,
      drawW,
      drawH
    );
  }
};