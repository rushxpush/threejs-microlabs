import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { scene, camera, renderer, canvas } from "./init";
import { wallMaterial, flowerMaterials } from "./texture.ts";
import Cube from "./cube.ts";

// const cube = new Cube(wallMaterial);
const cube = new Cube(flowerMaterials);
console.log(cube);

scene.add(cube.mesh);

camera.position.set(0, 10, 20);
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 5, 0);
controls.update();

function animate() {
  renderer.render(scene, camera);
  rotateCube();
}
renderer.setAnimationLoop(animate);

function rotateCube() {
  cube.mesh.rotation.x += 0.01;
  cube.mesh.rotation.y += 0.01;
}
