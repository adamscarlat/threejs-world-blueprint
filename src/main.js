import { World } from "./World/World.js";

// create the main function
async function main() {
  createWorld();
}

async function createWorld() {
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. complete async task (e.g. load glTF)
  await world.init();

  // 3. Render the scene
  world.start();
}

// call main to start the app
main().catch((err) => console.log(err));
