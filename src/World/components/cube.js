import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "../../../vendor/three/build/three.module.js";

const radiansPerSecond = 30 * (Math.PI / 180);

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: "peachpuff" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  // cube initial position
  cube.position.set(-5, 0, 0);
  cube.rotation.set(-0.5, -0.1, 0.8);

  const degreesPerSeconds = 3.6;
  const radiansPerSecond = degreesPerSeconds * (Math.PI / 180);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
