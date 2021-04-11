import { World } from "./World/World.js";

// create the main function
function main() {
  createWorld();
}

function createWorld() {
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

// call main to start the app
main();