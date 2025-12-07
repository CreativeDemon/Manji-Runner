import { Player } from "./player.js";
import { Environment } from "./environment.js";
import { Obstacles } from "./obstacles.js";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    
    this.gravity = 0.75;
    this.jumpForce = -12.5;
    this.speed = 4.5;
    
    this.player.y = 420 - 48;
    
    this.score = 0;
    this.gameOver = false;
    
    /* LOAD ASSETS */
    this.charImg = new Image();
    this.bgImg = new Image();
    this.groundImg = new Image();
    this.obsImg = new Image();
    
    this.charImg.src = "assets/images/character.png";
    this.bgImg.src = "assets/images/background.png";
    this.groundImg.src = "assets/images/ground.png";
    this.obsImg.src = "assets/images/obstacle.png";
    
    this.player = new Player(this.charImg);
    this.env = new Environment(this.bgImg, this.groundImg);
    this.obs = new Obstacles(this.obsImg);
    
    this.frame = 0;
    
    canvas.addEventListener("click", () => {
      this.player.jump(this.jumpForce);
    });
  }
  
  start() {
    requestAnimationFrame(() => this.loop());
  }
  
  loop() {
    if (this.gameOver) return;
    
    this.frame++;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.env.draw(this.ctx, this.canvas);
    this.player.update(this.gravity);
    this.player.draw(this.ctx);
    
    if (this.frame % 85 === 0) this.obs.spawn(this.canvas);
    this.obs.update(this.speed);
    this.obs.draw(this.ctx);
    
    requestAnimationFrame(() => this.loop());
  }
}