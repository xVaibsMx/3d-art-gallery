import * as THREE from 'three'

const images = [
  '/AOT.jpg',
  '/Spiderman.jpg',
  '/KakashiHatake.jpg',
  '/Luffy.jpg',
  '/Obanai.jpg',
  '/Goku.jpg',
]

const names = [
  'Attack On Titan',
  'Spiderman',
  'Kakashi Hatake',
  'Monkey D Luffy',
  'Iguru Obanai',
  'Son Goku',
]

// Renderer Setup
const renderer = new THREE.WebGLRenderer({ antialias: true })
const w = window.innerWidth
const h = window.innerHeight
renderer.setSize(w, h)
document.body.appendChild(renderer.domElement)

// Camera Setup
const fov = 75
const aspect = w / h
const near = 0.1
const far = 1000
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = -5

// Scene Setup
const scene = new THREE.Scene()

const rootNode = new THREE.Object3D()
scene.add(rootNode)

const baseNode = new THREE.Object3D()
rootNode.add(baseNode)

// Function Call
function animate() {
  renderer.render(scene, camera)
}

animate()
