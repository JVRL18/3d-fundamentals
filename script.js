import * as THREE from 'three';

//this will create the scene or the 3d model that will be a canvas
const scene = new THREE.Scene();
//this creates the camera, passing the fov, aspect, and limits to render far and near
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//creating a basic cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
//applying material can pass a object for color.
const material = new THREE.MeshBasicMaterial()
//creating a mesh for the material we just made
const cube = new THREE.Mesh(geometry, material);
//adding it to the cene we created before
scene.add(cube)

//since the camera and the cube will be at the 0,0,0 position we move the camera so whe can see the cube
camera.position.z = 10;

//creating a renderer with the size of the window and setting the loop for continuos rendering so it moves.
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate)

//adding to the canvas
document.body.appendChild(renderer.domElement);

//adding the movements animations the time came from the renderer callback.
function animate(time) {
    cube.rotation.x = time / 2000;
    cube.rotation.y = time / 1000;

    renderer.render(scene, camera);
}