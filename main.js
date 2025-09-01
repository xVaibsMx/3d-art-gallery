import * as THREE from 'three'

// Constants Setup
const images = [
  '/AOT.jpg',
  '/Goku.jpg',
  '/Ironman.jpg',
  '/Jinwoo.jpg',
  '/KakashiHatake.jpg',
  '/Luffy.jpg',
  '/NarutoxLuffy.jpg',
  '/Obanai.jpg',
  '/Rengoku.jpg',
  '/Spiderman.jpg',
  '/Spiderman2.jpg',
  '/Tanjiro.jpg',
]
const names = [
  'Attack On Titan',
  'Son Goku',
  'Iron Man',
  'Sung Jinwoo',
  'Kakashi Hatake',
  'Monkey D. Luffy',
  'Naruto & Luffy',
  'Iguro Obanai',
  'Kyojuro Rengoku',
  'Spiderman',
  'Spiderman (Lightning)',
  'Tanjiro Kamado',
]

// Renderer Setup
const renderer = new THREE.WebGLRenderer()
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

// Scene Setup
const rootNode = new THREE.Object3D()
const baseNode = new THREE.Object3D()
const scene = new THREE.Scene()

// function loop
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

// Resize Handler
window.addEventListener('resize', () => {
  const w = window.innerWidth
  const h = window.innerHeight
  renderer.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
})

animate()
