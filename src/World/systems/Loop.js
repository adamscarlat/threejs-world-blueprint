import { Clock } from "../../../vendor/three/build/three.module.js";

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();
      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  // Using delta (time in sec since last tick) to create dynamic frames.
  // Instead of transforming the object by a fixed amount we use delta as
  // a proportion. This will allow same speed movement no matter what the
  // available FPS is.
  tick() {
    // only call the getDelta function once per frame!
    const delta = clock.getDelta();

    //console.log(`The last frame rendered in ${delta * 1000} milliseconds`);

    // Code to update animations will go here
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
