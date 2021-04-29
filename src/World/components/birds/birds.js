import { GLTFLoader } from "../../../../vendor/three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync("/assets/models/Parrot.glb"),
    loader.loadAsync("/assets/models/Flamingo.glb"),
    loader.loadAsync("/assets/models/Stork.glb"),
  ]);

  console.log("Squaaawk!", parrotData);

  const parrot = setupModel(parrotData);
  const flamingo = setupModel(flamingoData);
  const stork = setupModel(storkData);

  parrot.scale.set(0.2, 0.2, 0.2);
  parrot.position.set(15, 10, 0);

  flamingo.scale.set(0.2, 0.2, 0.2);
  flamingo.position.set(30, 10, 0);

  stork.scale.set(0.2, 0.2, 0.2);
  stork.position.set(15, -10, 0);

  return {
    parrot,
    flamingo,
    stork,
  };
}

export { loadBirds };
