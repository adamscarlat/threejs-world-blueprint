import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "../../../vendor/three/build/three.module.js";

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: "peachpuff" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  cube.position.set(-5, 0, 0);
  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };
