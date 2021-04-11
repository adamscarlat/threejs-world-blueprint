import {
  TorusGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshStandardMaterial,
} from "../../../vendor/three/build/three.module.js";

function createTorus() {
  const geometry = new TorusGeometry(10, 3, 16, 100);
  const material = new MeshStandardMaterial({ color: 0xffff00 });
  material.wireframe = false;

  const torus = new Mesh(geometry, material);

  torus.position.z = -60;
  torus.position.y = 10;

  torus.rotation.y = 12;

  return torus;
}

export { createTorus };
