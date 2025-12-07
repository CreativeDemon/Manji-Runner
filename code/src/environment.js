export class Environment {
  constructor(bg, ground) {
    this.bg = bg;
    this.ground = ground;
  }
  
  draw(ctx, canvas) {
  // background
  ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  
  // repeating ground (16px tiles scaled)
  const tileSize = 32; // scaled from 16 → 32
  for (let x = 0; x < canvas.width; x += tileSize) {
    ctx.drawImage(this.ground, x, 420, tileSize, tileSize);
  }
}
}