import * as THREE from "three";

const loader: THREE.TextureLoader = new THREE.TextureLoader();

const loadColorTexture = (path: string) => {
  const texture: THREE.Texture = loader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

const wallPath = "texture/wall.jpg";
const flower1Path = "texture/flower-1.jpg";
const flower2Path = "texture/flower-2.jpg";
const flower3Path = "texture/flower-3.jpg";
const flower4Path = "texture/flower-4.jpg";
const flower5Path = "texture/flower-5.jpg";
const flower6Path = "texture/flower-6.jpg";

const wallMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
  map: loadColorTexture(wallPath),
});

const flowerMaterials: THREE.MeshBasicMaterial[] = [
  new THREE.MeshBasicMaterial({ map: loadColorTexture(flower1Path) }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture(flower2Path) }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture(flower3Path) }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture(flower4Path) }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture(flower5Path) }),
  new THREE.MeshBasicMaterial({ map: loadColorTexture(flower6Path) }),
];

export { wallMaterial, flowerMaterials };
