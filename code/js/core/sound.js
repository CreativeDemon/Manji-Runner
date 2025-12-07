const Sound = {
  play(name) {
    if (!Assets.sounds[name]) return;
    const s = Assets.sounds[name];
    s.currentTime = 0;
    s.play();
  },
  
  loop(name) {
    if (!Assets.sounds[name]) return;
    const s = Assets.sounds[name];
    s.loop = true;
    s.play();
  }
};