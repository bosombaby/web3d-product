# 作品展示平台

## 一、前言

`概述`：基于`WebGL`的三维引擎，目前是国内资料最多、使用最广泛的`三维引擎`，可以制作一些`3D`可视化项目

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202210210954262.png" alt="2" style="zoom: 67%;" />



目前随着`元宇宙`概念的爆火，`THREE`技术已经深入到了物联网、VR、游戏、数据可视化等多个平台。

最近一段时间主要对之前学习three.js的总结和记录，记录只对自己觉得重要的部分记录，其他的可以参考别的平台资源。



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101849641.png" alt="10" style="zoom: 50%;" />



目前作品的相关`展示平台`已上线：[VR_Team作品展示平台](https://product.vrteam.top/)，欢迎大家查看。

`项目开源地址`：[web3d-product](https://github.com/bosombaby/web3d-product)

## 二、项目使用流程

### 2.1 项目结构

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101913095.png" alt="11" style="zoom: 80%;" />

**功能说明**

- `public文件夹`：存放一些独立的案例界面（html格式），不需要依赖，可以直接运行在网页
  - `assets`存在依赖的资源
  - `Basic`：基础界面
  - `Comic`：二维漫画
  - `Particles`：粒子效果
  - `Processing`：后期chuli
  - `Visualization`：可视化
- `src`
  - `views`：功能主界面

### 2.2 基本使用

```js
//安装依赖
npm i
//运行项目
npm run dev
```

### 2.3 项目模板



![12](https://gitee.com/riskbaby/picgo/raw/master/blog/202302101919199.png)



该模板集成最简单的一个`three.js`环境，在此基础上可以自行搭建。

### 2.4 技术栈

`前端`：vue  +  three.js  +  js

### 2.5 部分成果预览

#### 粒子特效















## 三、基础动画

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101607331.png" alt="1" style="zoom: 50%;" />



`概述`：本质就是在`render()`函数不断渲染的过程中调用动画，每一帧不断增加目标体的位置，以此循环



`体验地址`：[基础动画](https://product.vrteam.top/examples/Basic/animate_basic.html)

### 3.1 THREE.Clock



```js
// 时间动画
let clockAnimate=()=>{
const elapsedTime=clock.getElapsedTime()

cube.position.x = Math.cos(elapsedTime)
cube.position.y=Math.sin(elapsedTime)
}
```

### 3.2 GASP

https://github.com/greensock/GSAP

```js
// gasp动画
let gsapAnimate=()=>{
	gsap.to(cube.position, { x: 5, duration: 3, delay:1})
}
```



## 四、照相机

### 8.1 正交相机

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209221121232.png" alt="1" style="zoom:50%;" />

| 参数(属性) | 含义                                                         |
| :--------- | :----------------------------------------------------------- |
| left       | 渲染空间的左边界                                             |
| right      | 渲染空间的右边界                                             |
| top        | 渲染空间的上边界                                             |
| bottom     | 渲染空间的下边界                                             |
| near       | near属性表示的是从距离相机多远的位置开始渲染，一般情况会设置一个很小的值。 默认值0.1 |
| far        | far属性表示的是距离相机多远的位置截止渲染，如果设置的值偏小小，会有部分场景看不到。 默认值1000 |



```js
let width = window.innerWidth;
let height = window.innerHeight;
const camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 1000);
scene.add(camera);
camera.position.set(100, 200, 100);
```



### 8.2 透视相机



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209221126000.png" style="zoom: 67%;" />



| 参数   | 含义                                                         | 默认值                               |
| :----- | :----------------------------------------------------------- | :----------------------------------- |
| fov    | fov表示视场，所谓视场就是能够看到的角度范围，人的眼睛大约能够看到180度的视场，视角大小设置要根据具体应用，一般游戏会设置60~90度 | 45                                   |
| aspect | aspect表示渲染窗口的长宽比，如果一个网页上只有一个全屏的canvas画布且画布上只有一个窗口，那么aspect的值就是网页窗口客户区的宽高比 | window.innerWidth/window.innerHeight |
| near   | near属性表示的是从距离相机多远的位置开始渲染，一般情况会设置一个很小的值。 | 0.1                                  |
| far    | far属性表示的是距离相机多远的位置截止渲染，如果设置的值偏小，会有部分场景看不到 | 1000                                 |

```js
let width = window.innerWidth;
let height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
camera.position.set(150, 100, 300);
camera.lookAt(scene.position);
```



**注意**

- 相机的`fov`视口是上下的，不是左右
- 向左移动相机，我们的场景会向右移动

### 4.3 相机控制器

`概述`：通过鼠标控制相机的`移动、旋转、缩放`以此实现场景物体的控制

**导包**

```js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
```

**应用**

```js
const controls = new OrbitControls(camera, renderer.domElement)
```

**自旋转**

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202210211054904.gif" alt="20221021_104803" style="zoom:50%;" />



```js
controls.autoRotate = true
```

必须在`render`函数调用`update`实时更新才奏效



## 五、画布和全屏



![2](https://gitee.com/riskbaby/picgo/raw/master/blog/202302101631627.png)

`像素比`：将一个像素分成若干个`n*n`的像素，这样的话显示会更加清晰，一般来说`像素比为2`就够了



```js
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
```

## 六、几何体



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101637794.png" alt="3" style="zoom: 50%;" />



`概述`：几何体由一个个`顶点粒子`构成，每个粒子包含了位置、uv贴图（3d=>2d坐标对应）等，三个顶点形成一个面，在`three.js`中。物体由一个个三角形面构成。





`BufferGeometry`：是面片、线或点几何体的有效表述。包括顶点位置，面片索引、法相量、颜色值、UV 坐标和自定义缓存属性值。使用 BufferGeometry 可以有效减少向 GPU 传输上述数据所需的开销。目前，`three.js`的物体都用上了`Buffer`，可以直接调用，一些顶点可以使用这个。



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101645494.png" alt="4" style="zoom:50%;" />

`演示链接`：[三角形](https://product.vrteam.top/examples/Basic/buffer_basic.html)

```js
let createBufferTriangle = () => {
    const count = 50
    for (let i = 0; i < count; i++) {
        const pointsArray = new Float32Array(9)
        for (let j = 0; j < 9; j++) {
            pointsArray[j] = (Math.random() - 0.5) * 5
        }

        const geometry = new THREE.BufferGeometry()
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(
                Math.random(),
                Math.random(),
                Math.random(),
            ),
            opacity: Math.random(),
            transparent: true,
            // wireframe:true
        })
        geometry.setAttribute('position', new THREE.BufferAttribute(pointsArray, 3))
        // geometry.attributes.position = new THREE.BufferAttribute(pointsArray, 3)
        const triangle = new THREE.Mesh(geometry, material)
        scene.add(triangle)

    }
}  
```



## 七、Debug UI



`dat.gui`：https://github.com/dataarts/dat.gui  样式好看，动画有点不流畅

`lil-gui`：https://lil-gui.georgealways.com/     动画流畅，官方案例用的多



## 八、纹理贴图

### 8.1 mipmapping

`mip映射`(mipmapping)是一种技术，它包括一次又一次地创建半个较小版本的纹理，直到得到1x1纹理。
所有这些纹理变化都会发送到GPU，GPU将自动选择最合适的纹理版本。所有的这些都已经由THREE.js和GPU处理，但是我们可以选择不同的过滤算法

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101721071.png" alt="在这里插入图片描述" style="zoom:67%;" />



### 8.2 放大滤镜

`概述`：原本的贴图大小`大于`要渲染的大小，如缩放物体，应用这个



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101739023.png" alt="5" style="zoom:67%;" />

### 8.3 缩小滤镜

`概述`：原本的贴图大小`小于`要渲染的大小，如缩放物体，应用这个



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101740817.png" alt="6" style="zoom:50%;" />



当纹理的minFilter属性使用NearestFilter时，我们可以不需要再mip映射了，可以通过以下代码为纹理停用mipmapping，使得GPU不再处理mip映射


```js
//如果不在乎远处物品效果如失真之类的，纹理的minFilter属性使用 NearestFilter时可以停用mipmapping以获得更好性能，根据实际项目而定
colorTexture.generateMipmaps = false
```

`参考链接`：https://threejs.org/docs/index.html#api/zh/constants/Textures

`参考链接`：https://blog.csdn.net/weixin_43990650/article/details/121595334

### 8.3 UV贴图

`参考链接`：https://www.bilibili.com/read/cv15999592

`掘金`：https://juejin.cn/post/7101209181822124069

#### 资源推荐

- www.poliigon.com
- https://3dtextures.me/
- www.arroway-textures.ch/



## 纹理、材质、灯光

这部分可以参考网上的资料，这里不做过多讲解

https://blog.csdn.net/weixin_43990650/article/details/121595334

## 九、阴影

### 9.1 灯光阴影

`四步走`

**灯光cast=>球体cast=>平面receive=>renderer设置**



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101805314.png" alt="8" style="zoom: 33%;" />

`概述`：灯光利用照相机渲染出`shadow map`贴到场景中，得到阴影



**简单例子**

```js
//直射光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
scene.add(directionalLight)

directionalLight.position.set(2, 2, -1)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.width = 1024
directionalLight.shadow.mapSize.height = 1024
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 6
directionalLight.shadow.camera.top = 2
directionalLight.shadow.camera.right = 2
directionalLight.shadow.camera.bottom = - 2
directionalLight.shadow.camera.left = - 2

directionalLight.shadow.radius = 10

//只是实体化的工具，参数修改上面的
const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
scene.add(directionalLightCameraHelper)
directionalLightCameraHelper.visible = false
```

**注意**：

- 只有平行光、点光源和聚光灯支持阴影
- 平行光是正交相机、其他的是透视相机，可以通过调节角度



### 9.2 烘焙阴影

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101801718.png" alt="6" style="zoom:50%;" />

`概述`：提前在`blender`渲染好阴影，这个不会变化，关闭渲染器阴影投射就行

### 9.3 阴影跟随

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202302101801333.png" alt="7" style="zoom: 67%;" />

`概述`：在小球下面放置具有阴影贴图的平面，关闭渲染器阴影，跟随小球运动改变透明度

```js
renderer.shadowMap.enabled = false
```



## 十、粒子效果



`概述`：粒子可以被用来创建星星、烟雾、雨滴、灰尘、火焰等等。我们可以使用合理的帧速率来创建数千个粒子。每个粒子都是由始终面向摄影机的平面（俩个三角形）组成的

`参考链接`：https://blog.csdn.net/weixin_43990650/article/details/121736698







