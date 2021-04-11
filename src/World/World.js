import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createTorus } from "./components/torus.js";
import { createLights } from "./components/lights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let light;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    const cube = createCube();
    const torus = createTorus();

    this.resizer = new Resizer(container, camera, renderer);

    container.append(renderer.domElement);

    light = createLights();
    scene.add(camera, light, cube, torus);

    this.animate();
  }

  render() {
    renderer.render(scene, camera);
  }

  animate() {
    requestAnimationFrame(() => {
      this.render();
      this.animate();
    });
  }
}

export { World };
