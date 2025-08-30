import * as THREE from 'three'

// Constants Setup
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

// Texture Loader Setup
const textureLoader = new THREE.TextureLoader()

// Renderer Setup
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Camera Setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// Scene Setup
const scene = new THREE.Scene()

const rootNode = new THREE.Object3D()
scene.add(rootNode)

let count = 6

for (let i = 0; i < count; i++) {
  const texture = textureLoader.load(images[i])
  texture.colorSpace = THREE.SRGBColorSpace;
  const baseNode = new THREE.Object3D()
  baseNode.rotation.y = i * ((2 * Math.PI) / 6)
  rootNode.add(baseNode)

  const artGeo = new THREE.BoxGeometry(3, 2, 0.1)
  const artMat = new THREE.MeshBasicMaterial({ map: texture })
  const artworks = new THREE.Mesh(artGeo, artMat)
  artworks.position.z = -4
  baseNode.add(artworks)
}

// Animation Loop
function animate() {
  rootNode.rotation.y += 0.005
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

// Resize Handler
window.addEventListener('resize', () => {
  const w = window.innerWidth
  const h = window.innerHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
})

animate()
