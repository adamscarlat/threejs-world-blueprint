import { Group } from "../../../../vendor/three/build/three.module.js";

import { createMeshes } from "./meshes.js";

const wheelSpeed = 34 * (Math.PI / 180);

class Train extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
      this.meshes.nose,
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel,
      this.meshes.smoke
    );
  }

  tick(delta) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;

    this.meshes.smoke.position.y += delta;
    if (this.meshes.smoke.position.y > 5) {
      this.meshes.smoke.visible = false;
    }
    if (this.meshes.smoke.position.y > 6) {
      this.meshes.smoke.visible = true;
      this.meshes.smoke.position.y = 2.5;
    }
  }
}

export { Train };
