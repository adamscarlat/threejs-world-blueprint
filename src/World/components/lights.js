import { DirectionalLight, AmbientLight, HemisphereLight } from "../../../vendor/three/build/three.module.js";

let ADD_ROT = 0.01;
let ADD_POS = 0.3;

function createLights() {
  // adding an ambient light to mimic indirect lighting
  const ambientLight = new AmbientLight("white", 0.7);

  // Directional Light
  const mainLight = new DirectionalLight("white", 3);
  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);
  mainLight.target.position.set(0, 0, 0);

  const secondaryLight = new DirectionalLight("white", 3);
  secondaryLight.position.set(-10, -10, -10);

  return [ambientLight, mainLight, secondaryLight];
}

function animateLight(light) {
  light.position.x += ADD_POS;
  if (light.position.x > 20 || light.position.x < -20) {
    ADD_POS *= -1;
  }
}

export { createLights, animateLight };
