window.Input = {
  jump: false
};

window.addEventListener("click", () => {
  
  // First click: start game
  if (!CONFIG.GAME_STARTED) {
    CONFIG.GAME_STARTED = true;
    
    // Start background music safely
    Sound.loop("bgm");
    
    // Start shop exit animation (instead of hide)
    Decoration.exiting = true;
    
    return;
  }
  
  // Normal jump after game starts
  Input.jump = true;
});