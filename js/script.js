import * as THREE from 'three';
import { LoadModel } from '../classes/loader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color('SkyBlue')

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.set(10, 5, -10)
camera.lookAt(0, 0, 0)

const loader = new LoadModel(['assets/gaming_pc.glb'])
const models = await loader.mount()
const scenes = models.getScenes()

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

scene.add(scenes[0])

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate)

document.body.appendChild(renderer.domElement);

function animate(time) {
    
    scenes[0].rotation.y = time/2000;

    renderer.render(scene, camera);
}