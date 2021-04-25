import {
  SphereBufferGeometry,
  DodecahedronGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "../../../vendor/three/build/three.module.js";

function createMeshGroup() {
  const group = new Group();
  const geometry = new SphereBufferGeometry(0.25, 16, 16);
  //const geometry = new DodecahedronGeometry(0.2);

  DodecahedronGeometry;
  const material = new MeshStandardMaterial({
    color: "indigo",
  });

  // create one prototype sphere
  const protoSphere = new Mesh(geometry, material);

  // add the sphere to the group
  group.add(protoSphere);

  // create twenty clones of the protoSphere
  // and add each to the group
  for (let i = 0; i < 1; i += 0.0667) {
    const sphere = protoSphere.clone();

    // position the spheres on around a circle
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);

    sphere.scale.multiplyScalar(0.01 + i);

    group.add(sphere);
  }

  // every sphere inside the group will be scaled
  group.scale.multiplyScalar(3);

  const radiansPerSecond = MathUtils.degToRad(30);

  // each frame, rotate the entire group of spheres
  const radius = 5;
  const deltaTheta = 0.01;
  let theta = 0;
  group.tick = (delta) => {
    group.rotation.z += delta * radiansPerSecond;
    group.rotation.x -= delta * radiansPerSecond;
    group.rotation.y -= delta * radiansPerSecond;

    group.position.x = Math.cos(theta) * radius;
    group.position.z = Math.sin(theta) * radius;
    theta += deltaTheta;
  };

  return group;
}

export { createMeshGroup };
