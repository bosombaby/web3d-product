import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'



let canvas
let scene, camera, renderer
let stats, controls

//像素比
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//网址 https://github.com/tweenjs/tween.js
let move = (obj,coord) => {
    new TWEEN.Tween(obj.position)
        .to(coord, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate((coord) => {
        obj.position.set(coord.x || 0,coord.y || 0,coord.z || 0)
        })
        .start()
}

// 拆解按钮
document.querySelector(".disassemble").onclick = () => {
  move(scene.getObjectByName("Object_7"),{x:-2.5,y:1})
  move(scene.getObjectByName("Object_18"),{x:-5,y:-1})

  move(scene.getObjectByName("Object_10"),{x:5})
  move(scene.getObjectByName("Object_11"),{x:2.5})
 
  move(scene.getObjectByName("Object_17"),{x:2.5})

  move(scene.getObjectByName("Object_27"),{z:2.5})
  move(scene.getObjectByName("Object_29"),{z:2.5})

  move(scene.getObjectByName("Object_12"),{x:-5})
  move(scene.getObjectByName("Object_14"),{z:-5})
  move(scene.getObjectByName("Object_16"),{z:-5})

};

// 还原按钮
document.querySelector(".recovery").onclick=()=>{
  move(scene.getObjectByName("Object_7"),{x:0,y:0})
  move(scene.getObjectByName("Object_18"),{x:0,y:0})

  move(scene.getObjectByName("Object_10"),{x:0})
  move(scene.getObjectByName("Object_11"),{x:0})
  move(scene.getObjectByName("Object_17"),{x:0})
  move(scene.getObjectByName("Object_27"),{z:0})
  move(scene.getObjectByName("Object_29"),{z:0})

  move(scene.getObjectByName("Object_12"),{x:0})
  move(scene.getObjectByName("Object_14"),{z:0})
  move(scene.getObjectByName("Object_16"),{z:0})
};
//初始化操作
let init = () => {
    // 获取dom元素
    canvas = document.querySelector('.webgl')

    // 场景初始化
    scene = new THREE.Scene()

    const axisHelper = new THREE.AxesHelper(10)
    scene.add(axisHelper)

    // 添加环境光
    const light = new THREE.AmbientLight(0xdeedff, 1.5)
    scene.add(light)

    const spotLight1 = new THREE.SpotLight( 0xffffff )
    spotLight1.position.set( 0, 15, 0 )
    spotLight1.angle =0.6
    scene.add( spotLight1 )

    const spotLight2 = new THREE.SpotLight( 0xffffff )
    spotLight2.position.set( -1, 3, 10 )
    spotLight2.angle =0.5
    scene.add( spotLight2 )

    const spotLight3 = new THREE.SpotLight( 0xffffff )
    spotLight3.position.set( -6, 9, -1 )
    spotLight3.angle =1.3
    scene.add( spotLight3 )

    //相机
    camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
    camera.position.set(-10,2,10)
    camera.lookAt(scene.position)


    //渲染器
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setSize(sizes.width,sizes.height)
    renderer.setPixelRatio(window.devicePixelRatio)

    //控制器
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    new GLTFLoader().load('../assets/models/gltf/电脑主机.glb', (gltf) => {
        const model = gltf.scene
        scene.add(model)

        animate()
    })







    //帧率检测
    stats = new Stats()
    document.body.appendChild(stats.domElement)


}
// 自适应屏幕
let onWindowsResize = () => {

    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(window.devicePixelRatio)
}

//双击全屏
let onWindowsScreen = () => {
    let isFullScreen = document.fullscreenElement
    if (!isFullScreen) {
        renderer.domElement.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}


let expandFunction = () => {
    window.addEventListener('resize', onWindowsResize)
    window.addEventListener('dblclick', onWindowsScreen)

}

let animate = () => {

    stats.update()
    TWEEN.update()
    renderer.render(scene,camera)
    requestAnimationFrame(animate)
}


init()

expandFunction()