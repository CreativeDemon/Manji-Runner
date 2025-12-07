const Background = {
  x1: 0,
  x2: 0,
  x3: 0,
  
  update() {
    if (!CONFIG.GAME_STARTED) return;
    
    this.x1 -= 0.5;
    this.x2 -= 1.5;
    this.x3 -= 3;
    
    if (this.x1 <= -CONFIG.WIDTH) this.x1 = 0;
    if (this.x2 <= -CONFIG.WIDTH) this.x2 = 0;
    if (this.x3 <= -CONFIG.WIDTH) this.x3 = 0;
  },
  
  draw(ctx) {
    ctx.drawImage(Assets.images.bg_far, this.x1, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    ctx.drawImage(Assets.images.bg_far, this.x1 + CONFIG.WIDTH, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    
    ctx.drawImage(Assets.images.bg_mid, this.x2, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    ctx.drawImage(Assets.images.bg_mid, this.x2 + CONFIG.WIDTH, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    
    ctx.drawImage(Assets.images.bg_near, this.x3, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    ctx.drawImage(Assets.images.bg_near, this.x3 + CONFIG.WIDTH, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
  }
};