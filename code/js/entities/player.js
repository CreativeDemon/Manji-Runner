const Player = {
  x: 140,
  
  // Start BELOW the platform
  y: CONFIG.HEIGHT - 32,
  targetY: CONFIG.HEIGHT - 64 - 48,
  
  w: 48,
  h: 48,
  
  vy: 0,
  frame: 0,
  tick: 0,
  
  idleRow: 0,
  runRow: 2,
  frameCount: 4,
  
  rising: false, // controls stepping onto platform
  
  update() {
    
    // ===== BEFORE START (IDLE BELOW PLATFORM) =====
    if (!CONFIG.GAME_STARTED) {
      // ✅ Idle alignment fix (shift up by 8px)
      this.y = CONFIG.HEIGHT - 96 - 16;
      
      this.tick++;
      if (this.tick % 12 === 0) {
        this.frame++;
        if (this.frame >= 2) this.frame = 0;
      }
      
      return;
    }
    
    
    // ===== FIRST MOMENT AFTER TAP: STEP UP =====
    if (!this.rising) {
      this.y -= 2; // smooth step up
      if (this.y <= this.targetY) {
        this.y = this.targetY;
        this.rising = true;
      }
      return;
    }
    
    // ===== NORMAL RUN PHYSICS =====
    this.vy += CONFIG.GRAVITY;
    this.y += this.vy;
    
    const ground = CONFIG.HEIGHT - 64 - this.h;
    if (this.y >= ground) {
      this.y = ground;
      this.vy = 0;
    }
    
    if (Input.jump && this.vy === 0) {
      this.vy = CONFIG.JUMP_FORCE;
      Sound.play("jump");
      Input.jump = false;
    }
    
    this.tick++;
    if (this.tick % 6 === 0) {
      this.frame++;
      if (this.frame >= this.frameCount) this.frame = 0;
    }
  },
  
  draw(ctx) {
    const row = CONFIG.GAME_STARTED ? this.runRow : this.idleRow;
    
    ctx.drawImage(
      Assets.images.player,
      this.frame * 32,
      row * 32,
      32,
      32,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
};