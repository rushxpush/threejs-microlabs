import * as THREE from "three";

const texture = (path: string) => {
  const loader: THREE.TextureLoader = new THREE.TextureLoader();
  const texture: THREE.Texture = loader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

const wallPath = "texture/wall.jpg";

const texturePaths = {
  wall: wallPath,
};

export { texture, texturePaths };
