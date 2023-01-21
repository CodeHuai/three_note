import * as THREE from 'three'

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(document.body.clientWidth, document.body.clientHeight)
document.body.appendChild(renderer.domElement)


// 摄像机
const camera = new THREE.PerspectiveCamera(45, document.body.clientWidth/document.body.clientHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

// 场景
const scene = new THREE.Scene()


//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );
