import { WebGLRenderer } from "../../../vendor/three/build/three.module.js";

function createRenderer() {
  const webGLRenderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model.
  // computes how light fades as it lives its source.
  webGLRenderer.physicallyCorrectLights = true;

  return webGLRenderer;
}

export { createRenderer };
