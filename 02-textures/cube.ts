import * as THREE from "three";

class Cube {
  geometry: THREE.BoxGeometry;
  materials: THREE.MeshBasicMaterial | THREE.MeshBasicMaterial[];
  cube: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial | THREE.MeshBasicMaterial[],
    THREE.Object3DEventMap
  >;

  constructor(materials: THREE.MeshBasicMaterial | THREE.MeshBasicMaterial[]) {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.materials = materials;
    this.cube = new THREE.Mesh(this.geometry, this.materials);
  }

  get mesh() {
    return this.cube;
  }
}

export default Cube;
