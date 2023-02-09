<template>
    <canvas id="c"></canvas>
    <div class="container">
        <div class="top-header">
            作品展示平台
        </div>

        <div class="main-content">
            <div  v-for="(item,index) in caseList"  :index="index">
                <div class="classfiy-theme" v-if="item.single">{{ item.title }}</div>
                <div class="single-item" v-else>
                    <div class="model-show"></div>
                    <div class="model-info">
                        {{ item.title }}
                        <a :href="item.link" target="_blank">
                            <el-button type="primary">view</el-button>
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>

        <div class="back-top" @click="backTop">
            <img src="../assets/img/rocket.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref,reactive,onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'


import {useProductStore,useSettingStore} from '@/store/'

const product = useProductStore()
const set = useSettingStore()

const params = set.params
const orbit=params.orbit
const obj=params.obj


let caseList = product.mainList

let scenes = []
let canvas, content,models, renderer
let stats,gui


// 初始化场景
let init = () => {

    // 获取dom元素
    canvas = document.querySelector('#c')
    content = document.querySelector('.container')
    models = document.querySelectorAll('.model-show')

    const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.ConeGeometry(0.5, 1, 8),
        new THREE.SphereGeometry(0.5, 12, 8),
        new THREE.DodecahedronGeometry(0.5),
        new THREE.CylinderGeometry(0.5, 0.5, 1, 12),
        new THREE.TorusGeometry(0.5, 0.1, 16, 100)

    ]
    // 遍历单个模型
    models.forEach(element => {
        // 单个场景
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(50, 1, 1, 10)
        camera.position.z = 2
        scene.userData.element = element
        scene.userData.camera = camera

        // 控制器
        const controls = new OrbitControls(scene.userData.camera, scene.userData.element)
        controls.minDistance = 1
        controls.maxDistance = 5
        controls.enablePan = false
        // controls.enableZoom = false
        scene.userData.controls = controls

        //物体
        const geometry = geometries[Math.floor(Math.random() * geometries.length)]
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHSL(Math.random(), 1, 0.75) ,
            roughness: obj.roughness,
            metalness: 0,
            flatShading: true,
            // wireframe:true
        })

        scene.add(new THREE.Mesh(geometry, material))
        scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444))


        // 灯光设置
        const light = new THREE.DirectionalLight(0xffffff, 0.5)
        light.position.set(1, 1, 1)
        scene.add(light)

        scenes.push(scene)

    })

    //帧率检测
    stats = new Stats()
    document.body.appendChild(stats.domElement)

    // 渲染器
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setClearColor(0xffffff, 1)
    renderer.setPixelRatio(window.devicePixelRatio)
}

//生成菜单设置
let createPanel = () => {
    gui = new GUI({ width: 150 })
    const folder1 = gui.addFolder('鼠标控制')
    const folder2 = gui.addFolder('物体控制')
    const folder3 = gui.addFolder('灯光控制')
    const folder4 = gui.addFolder('随机样式')

    folder1.add(orbit,'autoRotate').name('自旋转')
    folder1.add(orbit, 'autoRotateSpeed', 0, 0.01, 0.001).name('旋转速度')


    gui.close()

}

// 展示顶部
let isShowTopDom=true
// 渲染画布尺寸
let updateSize = () => {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    renderer.setSize(width, height, false);
    if (width <= 600 && isShowTopDom) {
        stats.domElement.style.display = 'none'
        gui.domElement.style.display = 'none'
        isShowTopDom =false
    } else if (width > 600 && !isShowTopDom) {
        stats.domElement.style.display = 'block'
        gui.domElement.style.display ='block'
        isShowTopDom = true
    }
}

let  render= () =>{

    updateSize()
    canvas.style.transform = `translateY(${window.scrollY}px)`
    // 渲染器颜色、部分剪裁
    renderer.setClearColor(0xffffff)
    renderer.setScissorTest(false)
    renderer.clear()

    renderer.setClearColor(0xe0e0e0)
    renderer.setScissorTest(true)
    scenes.forEach(scene => {
        if (orbit.autoRotate) {
            scene.children[0].rotation.y = Date.now() * orbit.autoRotateSpeed
        }
        
        const element = scene.userData.element

        // 确定裁剪的位置
        const rect = element.getBoundingClientRect()
        if (rect.rigth < 0 || rect.bottom < 0||rect.left>renderer.domElement.clientWidth||rect.top>renderer.domElement.clientHeight) {
            return;
        }

        // 确定视口
        const width = rect.right - rect.left
        const height = rect.bottom - rect.top
        const left = rect.left
        const bottom = renderer.domElement.clientHeight - rect.bottom

        renderer.setViewport(left, bottom, width, height)
        renderer.setScissor(left, bottom, width, height)

        const camera = scene.userData.camera
        renderer.render(scene,camera)
    })

    // 帧率检测
   
        stats.update()
    
}

// 动画渲染
let animate = () => {
    render()
    requestAnimationFrame(animate)
}

// 全屏操作
let onWindowsScreen = () => {
    let isFullScreen = document.fullscreenElement
    if (!isFullScreen) {
        canvas.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}

// 返回顶部
let backTop = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

// 扩展功能
let expandFunction = () => {
    window.addEventListener('dblclick',onWindowsScreen)
}


onMounted(() => {
    init()
    createPanel()
    animate()
    // expandFunction()
})

</script>

<style lang="scss" scoped>
@font-face {
    font-family: space;
    src: url('../../examples/assets/fonts/particles.ttf');
}
#c{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
 }
.container{
    position: absolute;
    top: 0;
    left: 10%;
    width: 78vw;
    z-index: 1;
    .setting{
        position: fixed;
        top: 20px;
        right: 50px;
        cursor: pointer;
    }
    .top-header{
        position: fixed;
        width: 78vw;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 2rem;
        font-family: space;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 0.5em;
        font-weight: 600;
        text-shadow: 1px 1px 1px #82c8e6, 0px 2px 2px #2d6cca, 0px 4px 8px #22cbdb;
        background-color: skyblue;
    }
    
    .main-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 80px;
        .classfiy-theme{
            width: 78vw;
            height: 45px;
            color: #fff;
            line-height: 45px;
            text-indent: 1em;
            background-color: #898cee;
        }
        .single-item{
            margin: 1em;
            padding: 1em;
            box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25);
            .model-show{
                width: 200px;
                height: 200px;
                // background-color: rgba(255, 192, 203, 0.607);
            }
            .model-info{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 200px;
                margin-top: 0.5em;
                color: #888;
                font-family: sans-serif;
                font-size: large;

            }

        }
    }

    .back-top{
        position: fixed;
        right: 1%;
        bottom: 3%;
        cursor: pointer;
    }
}


@media (max-width: 1370px) {
    .container{
        left: 0;
        width: 100vw;
        .classfiy-theme{
            width: 100vw !important;
        }
        .top-header {
            width: 100%;
        }
    }

}

</style>