import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

let canvas
let scene, camera, renderer
let stats, controls, gui

//像素比
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//初始化操作
let init = () => {
    // 获取dom元素
    canvas = document.querySelector('.webgl')

    // 场景初始化
    scene = new THREE.Scene()


    //坐标轴
    const axesHelper = new THREE.AxesHelper(10)
    scene.add(axesHelper)


    // 添加环境光
    const light = new THREE.AmbientLight(0xdeedff, 0.5)
    scene.add(light)

    //相机
    camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 1000)
    camera.position.set(0, 12, 18)
    camera.lookAt(scene.position)


    //渲染器
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setSize(sizes.width, sizes.height)
    // renderer.setClearColor('lightsalmon', 0.5)
    renderer.setPixelRatio(window.devicePixelRatio)




    //控制器
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

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

// 加载模型
const gltfLoader = new GLTFLoader()

let addModel = () => {
    gltfLoader.load('../assets/models/gltf/MachineRoom/machineRoom.gltf', (gltf) => {
        const machine = gltf.scene
        
        scene.add(machine)
    })
}

let animate = () => {

    stats.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}


init()
addModel()
animate()
expandFunction()