import { OrbitControls } from "../../../vendor/three/examples/jsm/controls/OrbitControls.js";
//import { OrbitControls } from "https://unpkg.com/three@0.117.0/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  // damping and auto rotation require
  // the controls to be updated each frame

  controls.enableDamping = true;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
