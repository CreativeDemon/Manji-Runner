const Assets = {
  images: {},
  sounds: {},
  
  loadImages(list, cb) {
    let loaded = 0;
    const keys = Object.keys(list);
    
    keys.forEach(key => {
      const img = new Image();
      img.src = list[key];
      img.onload = () => {
        this.images[key] = img;
        loaded++;
        if (loaded === keys.length) cb();
      };
    });
  },
  
  loadSounds(list) {
    Object.keys(list).forEach(key => {
      const audio = new Audio(list[key]);
      this.sounds[key] = audio;
    });
  }
};