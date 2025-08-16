import * as THREE from "three";

class Cube {
  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  cube: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >;

  constructor(texture: THREE.Texture) {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      map: texture,
    });
    this.cube = new THREE.Mesh(this.geometry, this.material);
  }

  get mesh() {
    return this.cube;
  }
}

export default Cube;
