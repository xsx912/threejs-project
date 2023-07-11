import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,10)
//相机添加到场景中
scene.add( camera )

// 创建几何体
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 材质
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
// 几何体添加到场景中
scene.add( cube );
console.log(cube);
// 坐标系添加
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

// 渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器大小
renderer.setSize( window.innerWidth, window.innerHeight );
// canvas 元素添加到页面中
document.body.appendChild( renderer.domElement );

// 控制器控制相机视角
const controls = new OrbitControls( camera, renderer.domElement );

function animate(time) {
    scale(time)
    // 渲染相机和场景
    renderer.render( scene, camera );
    // 每一帧都渲染
    requestAnimationFrame( animate );
}

function scale(time) {
    // 控制几何体缩放scale
    // cube.scale.set(3, 2, 1)
    // 控制旋转
    let t = (time / 1000) % 5
    cube.rotation.x = t * 1
    if(cube.rotation.x >= 5){
        cube.rotation.x = 0
    }
}
animate()