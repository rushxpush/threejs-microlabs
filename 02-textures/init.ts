import * as THREE from "three";

// Scene
const scene: THREE.Scene = new THREE.Scene();

const fov = 45;
const aspect = 2;
const near = 0.1;
const far = 100;

// Camera
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  fov,
  aspect,
  near,
  far,
);

// Renderer
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Canvas
const canvas: HTMLCanvasElement = renderer.domElement;

export { scene, camera, renderer, canvas };
