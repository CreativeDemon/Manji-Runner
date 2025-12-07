export class Player {
  constructor(image) {
    this.img = image;
    this.x = 60;
    this.y = 330;
    this.w = 48;
    this.h = 48;
    this.vy = 0;
    
    this.frame = 0;
    this.tick = 0;
    
    this.frameWidth = 256;
    this.frameHeight = 256;
    this.runFrames = 4;
  }
  
  update(gravity) {
    this.vy += gravity;
    this.y += this.vy;
    
    if (this.y > 330) {
      this.y = 330;
      this.vy = 0;
    }
    
    this.tick++;
    if (this.tick % 6 === 0) {
      this.frame++;
      if (this.frame >= this.runFrames) this.frame = 0;
    }
  }
  
  jump(force) {
    if (this.vy === 0) this.vy = force;
  }
  
  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.frame * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}