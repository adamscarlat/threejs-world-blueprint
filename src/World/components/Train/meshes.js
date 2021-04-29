import { Group, Mesh } from "../../../../vendor/three/build/three.module.js";

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const cabin = new Mesh(geometries.cabin, materials.body);
  cabin.position.set(1.5, 1.4, 0);

  const chimney = new Mesh(geometries.chimney, materials.detail);
  chimney.position.set(-2, 1.9, 0);

  const nose = new Mesh(geometries.nose, materials.body);
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;

  const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
  smallWheelRear.position.y = 0.5;
  smallWheelRear.rotation.x = Math.PI / 2;

  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  const bigWheel = smallWheelRear.clone();
  bigWheel.position.set(1.5, 0.9, 0);
  bigWheel.scale.set(2, 1.25, 2);

  const smoke = new Mesh(geometries.smoke, materials.detail);
  smoke.position.set(-2, 2.7, 0);
  const smokeSecondary = new Mesh(geometries.smoke, materials.detail);
  smokeSecondary.position.set(0.3, -0.2, 0);
  smokeSecondary.scale.set(0.7, 0.7, 0.7);
  const smokeTertiary = new Mesh(geometries.smoke, materials.detail);
  smokeTertiary.position.set(-0.3, -0.2, 0);
  smokeTertiary.scale.set(0.5, 0.5, 0.5);

  smoke.add(smokeSecondary, smokeTertiary);
  // const smoke = new Group();
  // smoke.add(smokeMain, smokeSecondary);
  // smoke.position.set(-2, 2.7, 0);

  return {
    nose,
    cabin,
    chimney,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel,
    smoke,
  };
}

export { createMeshes };
