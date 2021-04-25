import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createTorus } from "./components/torus.js";
import { createLights } from "./components/lights.js";
import { createMeshGroup } from "./components/meshGroup.js";
import { createRenderer } from "./systems/renderer.js";

import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createControls } from "./systems/controls.js";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let light;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);

    const cube = createCube();
    loop.updatables.push(cube);

    const torus = createTorus();

    this.resizer = new Resizer(container, camera, renderer);

    container.append(renderer.domElement);

    const lights = createLights();

    const controls = createControls(camera, renderer.domElement);
    loop.updatables.push(controls);

    const meshGroup = createMeshGroup();
    loop.updatables.push(meshGroup);

    scene.add(camera, cube, torus, meshGroup, ...lights);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
