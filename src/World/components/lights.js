import {
  HemisphereLight,
  DirectionalLight,
  PointLight,
  RectAreaLight,
} from "../../../vendor/three/build/three.module.js";

let ADD_ROT = 0.01;
let ADD_POS = 0.3;

function createLights() {
  // Directional Light
  const light = new DirectionalLight("white", 3);
  // move the light right, up, and towards us
  light.position.set(0, 10, 10);
  light.target.position.set(0, 0, 0);

  return light;
}

function animateLight(light) {
  light.position.x += ADD_POS;
  if (light.position.x > 20 || light.position.x < -20) {
    ADD_POS *= -1;
  }
}

export { createLights, animateLight };
