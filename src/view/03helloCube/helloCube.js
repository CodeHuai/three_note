import * as THREE from 'three';


// Three.js需要使用这个canvas标签来绘制，所以我们要先获取它然后传给three.js。
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});


// 透视摄像机
const fov = 75;
const aspect = 2;  // 相机默认值
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// 场景
const scene = new THREE.Scene();

// 几何体
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
// 设置材质
const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
// 创建一个网格(Mesh)对象，包含了
// 几何体(Geometry)(物体的形状)
// 材质(Material)(如何绘制物体，光滑还是平整，什么颜色，什么贴图等等)
// 对象在场景中相对于他父对象的位置、朝向、和缩放。下面的代码中父对象即为场景对象。
const cube = new THREE.Mesh(geometry, material);

// 将网格添加到场景中
scene.add(cube);

renderer.render(scene, camera);