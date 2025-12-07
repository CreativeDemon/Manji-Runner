export class Obstacles {
  constructor(img) {
    this.img = img;
    this.list = [];
  }
  
  spawn(canvas) {
    this.list.push({
      x: canvas.width,
      y: 380,
      w: 32,
      h: 40
    });
  }
  
  update(speed) {
    for (let o of this.list) {
      o.x -= speed;
    }
  }
  
  draw(ctx) {
    for (let o of this.list) {
      ctx.drawImage(this.img, o.x, o.y, o.w, o.h);
    }
  }
}