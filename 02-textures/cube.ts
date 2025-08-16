import * as THREE from "three";

// Texture Loader
const loader: THREE.TextureLoader = new THREE.TextureLoader();
const texture: THREE.Texture = loader.load("texture/wall.jpg");
texture.colorSpace = THREE.SRGBColorSpace;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
const cube = new THREE.Mesh(geometry, material);

export { cube };
