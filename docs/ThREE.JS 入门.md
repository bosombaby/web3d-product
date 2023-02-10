# Three.js 入门

## 一、前言



`概念`：基于`WebGL`的三维引擎，可以制作一些`3D`可视化项目

`学习建议`：基本的`html+css+js`知识点，入门可以试着在案例上面改代码，不一定自己慢慢敲

**资源推荐**：

- [Three.js官网](https://threejs.org/)

- [中文文档](http://www.yanhuangxueyuan.com/threejs/docs/index.html)
- [github仓库](https://github.com/mrdoob/three.js)
- [BootCDN](https://www.bootcdn.cn/)

## 二、环境配置

### 2.1 跨域

`概念`：本地的路径却要访问外部网站的资源，需要配置`跨域`才可以打开

**方案**：

- `Live Server`启动本地服务并且托管文件，推荐使用
- `node.js`搭建本地服务器

### 2.2  引入Three.js

#### 2.2.1 CDN引入

`BootCDN`：搜寻想要引入的资源，复制`script`引入到`html`就可以使用了

```js
<script src="https://cdn.bootcdn.net/ajax/libs/three.js/0.144.0/three.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/three.js/0.144.0/three.min.js"></script>
```



**注意**：`three.js`开发环境使用，包含调试报错信息，`three.min.js`部署环境使用，体积小

#### 2.2.2 本地引入

在网上下载整个`three.js`到本地，根据路径引入文件

**目录结构**

```
three.js-master
└───build——src目录下各个代码模块打包后的结果
    │───three.js——开发的时候.html文件中要引入的threejs引擎库，和引入jquery一样，可以辅助浏览器调试
    │───three.min.js——three.js压缩后的结构文件体积更小，可以部署项目的时候在.html中引入。
    │
└───docs——Three.js API文档文件
    │───index.html——打开该文件可以实现离线查看threejs API文档
    │
└───editor——Three.js的可视化编辑器，可以编辑3D场景
    │───index.html——打开应用程序
    │
└───docs——Three.js API文档文件
    │───index.html——打开该文件可以实现离线查看threejs API文档
    │
└───examples——里面有大量的threejs案例，平时可以通过代码编辑全局查找某个API、方法或属性来定位到一个案例
    │
└───src——Three.js引擎的各个模块，可以通过阅读源码深度理解threejs引擎
    │───index.html——打开该文件可以实现离线查看threejs API文档
    │
└───utils——一些辅助工具
    │───\utils\exporters\blender——blender导出threejs文件的插件
```

#### 2.2.3 npm管理

此方案需要了解`node.js`一些知识

**安装**

```js
npm install three
```

**使用**

```js
// 方式 1: 导入整个 three.js核心库
import * as THREE from 'three';

const scene = new THREE.Scene();

// 方式 2: 仅导入你所需要的部分
import { Scene } from 'three';

const scene = new Scene();
```

## 三、快速入门

### 3.1 前言

`Three.js`一般分为三个部分：**场景**、**相机**、**渲染器**



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209201555244.png" alt="QQ截图20220920155432" style="zoom: 80%;" />





<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209201556803.png" style="zoom:50%;" />





### 3.2 第一个3D场景

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209202106898.png" alt="1" style="zoom: 50%;" />

```js
//创建场景
const scene = new THREE.Scene();

//坐标系
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

//生成物体 矩形 100*100*100
const geometry = new THREE.BoxGeometry(100, 100, 100);

//生成材质
const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff
})

//生成网络模型
const mesh = new THREE.Mesh(geometry, material);

//加入场景
scene.add(mesh);

//点光源
const point = new THREE.PointLight();
point.position.set(100, 100, 100);
scene.add(point);

//环境光
const ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);

//透视相机
let width = window.innerWidth;
let height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.position.set(150, 100, 300);
camera.lookAt(scene.position);

//渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xb9d3ff, 1);
document.body.appendChild(renderer.domElement);


//鼠标操作
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

const controls = new THREE.OrbitControls(camera, renderer.domElement);
```



## 四、几何



通常，过去的几何图形，我们就知道点线面体四种概念，`点动成线，线动成面，面动成体`，接下来用代码实现这些基本的图形

### 4.1 点



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209271546439.png" alt="1" style="zoom: 67%;" />

```js
//打造酷炫三角形
for (let i = 0; i < 50; i++) { 
    const geometry = new THREE.BufferGeometry();
    const arr = new Float32Array(9);
    for (let j = 0; j < 9; j++) { 
        arr[j] = Math.random() * 5;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    let randomColor = new THREE.Color(Math.random(), Math.random(), Math.random());
    const material = new THREE.MeshBasicMaterial({
        color: randomColor,
        transparent: true,
        opacity:0.5,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}
```





### 4.2 线





### 4.3 面

#### 4.3.1 圆

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209211104154.png" style="zoom: 50%;" />



```js
const geometry = new THREE.CircleGeometry(100, 32, 0, 2 * Math.PI);//半径 分片 起始 结束
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);
```





#### 4.3.2 环

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209211757153.png" alt="1" style="zoom: 67%;" />

```js
const geometry = new THREE.RingGeometry(1, 5, 32, 0, 0, Math.PI);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

#### 4.3.3 矩形

![1](https://gitee.com/riskbaby/picgo/raw/master/blog/202209211749389.png)



```js
const geometry = new THREE.PlaneGeometry(1, 1);// w h 分段
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
```



#### 4.3.4 形状缓冲



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209211804681.png" style="zoom:50%;" />



```js
//画布
const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo(x + 5, y + 5);
heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

const geometry = new THREE.ShapeGeometry(heartShape);
const material = new THREE.MeshBasicMaterial({ color: 0xCC0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

```





### 4.4 体

#### 4.4.1  方体

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209211037215.png" alt="1" style="zoom: 50%;" />



```js
const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```



#### 4.4.2 圆锥

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209211731735.png" style="zoom:50%;" />



```js
const geometry = new THREE.ConeGeometry(5, 15, 32);//底面半径 高 侧边三角分段
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const clone = new THREE.Mesh(geometry, material);
scene.add(clone);
```



#### 4.4.3 圆柱

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209211739460.png" alt="1" style="zoom:50%;" />

```js
const geometry = new THREE.CylinderGeometry(5, 5, 5, 32);//底面半径 上面半径 高度 侧面分段
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);
```

#### 4.4.4 圆球

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209211809777.png" style="zoom:50%;" />

```js
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
```



### 4.5 拓展



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209211818461.png" style="zoom:50%;" />

```js
const geometry = new THREE.BoxGeometry(10, 10, 10);
//平移
geometry.translate(20, 0, 0);
//缩放
geometry.scale(1.5, 1, 1);
//旋转
geometry.rotateX(Math.PI / 4);

const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

```

























## 五、材质对象

### 5.1 点材质



### 5.2 线材质



### 5.3 网络材质

#### 5.3.1 MeshBasicMaterial

`概念`：不受**带有方向光照**影响、无背部**阴影**

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212114681.png" alt="6" style="zoom:50%;" />



```js
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
```



#### 5.3.2 MeshLambertMaterial

`概念`：表面与光源进行漫反射光照计算，分界处明显



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212113510.png" alt="5" style="zoom:50%;" />



```js
const material = new THREE.MeshLambertMaterial({ color: 0xFF99FF });
```



#### 5.3.3 MeshPhongMaterial

`概念`：表面与光源进行漫反射光照计算，分界处明显，有高光效果（`镜面反射`）



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212114036.png" alt="4" style="zoom:50%;" />

```js
const material = new THREE.MeshPhongMaterial({ color: 0xFF99FF });
```



#### 5.3.4 MeshStandardMaterial



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212112653.png" alt="3" style="zoom:50%;" />



`概念`：该材质提供了比`MeshLambertMaterial `或`MeshPhongMaterial` 更精确和逼真的结果，代价是**计算成本更高**



```js
const material = new THREE.MeshStandardMaterial({ color: 0xFF99FF });
```



### 5.4 精灵材质



### 5.5 着色器





### 5.6 拓展

#### 5.6.1 透明度

`概念`：两个属性同时使用，可以通过访问材质对象属性形式设置`transparent`和`.opacity`的属性值



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212118277.png" alt="1" style="zoom:50%;" />

```js
const material = new THREE.MeshStandardMaterial({
    color: 0xFF99FF,
    transparent: true,
    // 设置材质透明度
    opacity: 0.4
});
```



## 六、模型对象

### 6.1 点模型



### 6.2 线模型



### 6.3 网络模型



### 6.4 模型基类





### 6.5 加载模型

```js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
//加载模型
const dracoLoader = new DRACOLoader();
//解码器路径 类型
dracoLoader.setDecoderPath('./robot/draco/');
dracoLoader.setDecoderConfig({ type: "js" });

//加载模型
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.load('./robot/robot.glb', (gltf) => {
    scene.add(gltf.scene);
    
})
```





## 七、光照

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212147316.png" alt="1" style="zoom:50%;" />

### 7.1 环境光

`概念`：光照对`three.js`的物体全表面进行光照测试，有可能会发生`光照融合`

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212146714.png" alt="1" style="zoom:50%;" />



```js
//环境光
const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);
```

### 7.2 平行光

`概念`：向**特定方向**发射的光，`太阳光`也视作平行的一种，和上面比较，物体变亮了

```js
//平行光  颜色 强度
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 100, 100);//光源位置
directionalLight.target = cube;//光源目标 默认 0 0 0
scene.add(directionalLight);
```

### 7.3 点光源

`概念`：由**中间向四周**发射光、`强度比平行光小`

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212207586.png" alt="2" style="zoom:50%;" />



```js
// 颜色 强度 距离 衰退量（默认1）
const pointLight = new THREE.PointLight(0xff0000, 1, 100, 1);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);

```

### 7.4 聚光灯

`概念`：家里面的**节能灯泡**，强度较好



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212218106.png" alt="1" style="zoom:50%;" />



```js
//聚光灯
const spotLigth = new THREE.PointLight(0xffffff);
spotLigth.position.set(50, 50, 50);
spotLigth.target = cube;
spotLigth.angle = Math.PI / 6;
scene.add(spotLigth);
```



### 7.5 半球光

`概念`：光源直接放置于场景之上，光照颜色从天空光线颜色渐变到地面光线颜色

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209212217987.png" alt="1" style="zoom:50%;" />

```js
//半球光
const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);//天空 场景 
scene.add(light);
```

### 7.6 阴影

#### 7.6.1 入门

`概述`：灯打到物体上产生阴影（环境光除外）、主要分为下面四个步骤：

- 渲染器开始渲染阴影			 	`renderer.shadowMap.enabled = true;`
- 光照投射阴影                        `directLigth.castShadow = true;`
- 物体投射阴影                       `sphere.castShadow = true;`
- 平面接受阴影                        `plane.receiveShadow = true;`



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209281559768.png" alt="1" style="zoom:67%;" />



#### 7.6.2 模糊度



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209281619720.png" alt="1" style="zoom:50%;" />

```js
//环境灯光
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

//平行光
const directLigth = new THREE.DirectionalLight(0xffffff,0.5);
directLigth.position.set(10, 10, 10);
directLigth.castShadow = true;

//阴影模糊程度
directLigth.shadow.radius = 20;
//阴影分辨率
directLigth.shadow.mapSize.set(2048,2048);
// 平行光投射相机属性
directLigth.shadow.camera.near = 0.5; 
directLigth.shadow.camera.far = 500; 
scene.add(directLigth);
```

















## 八、照相机

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



## 九、纹理贴图

### 9.1 基础贴图

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209271611168.png" alt="1" style="zoom:50%;" />

`概述`：只需要把材质的颜色改成`map`就行了，可以对贴图进行**平移、旋转、重复**

```js
//纹理贴图
const geometry = new THREE.BoxGeometry(10, 10, 10, 200, 200);
//纹理加载器，以后单独写
const textureLoader = new THREE.TextureLoader();
//基本贴图
const doorTexture = textureLoader.load('./textures/course/door/color.jpg');

const material = new THREE.MeshBasicMaterial({
    map:doorTexture,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209271623705.png" alt="1" style="zoom:50%;" />

```js
//贴图操作
cubeTexture.offset.x = 0.5;
cubeTexture.offset.y = 0.5;
//旋转中心点。(0.5, 0.5)对应纹理的正中心。默认值为(0,0)，即左下角。
cubeTexture.center.set(0.5, 0.5);
//逆时针旋转
cubeTexture.rotation = Math.PI / 6;

//水平重复 竖直重复
cubeTexture.wrapS = THREE.RepeatWrapping;
cubeTexture.wrapT = THREE.RepeatWrapping;
cubeTexture.repeat.set(4,4);
```



```js
.magFilter : number
当一个纹素覆盖大于一个像素时，贴图将如何采样。默认值为THREE.LinearFilter， 它将获取四个最接近的纹素，并在他们之间进行双线性插值。 另一个选项是THREE.NearestFilter，它将使用最接近的纹素的值。
请参阅texture constants页面来了解详细信息。

.minFilter : number
当一个纹素覆盖小于一个像素时，贴图将如何采样。默认值为THREE.LinearMipmapLinearFilter， 它将使用mipmapping以及三次线性滤镜。
```

### 9.2 透明贴图

`概述`：贴图的两侧想让他变得透明，就像铁栅栏一样，可以在`材质对象`的`alphaMap`贴图设置



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209271715419.png" alt="1" style="zoom:50%;" />



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209271718606.png" alt="1" style="zoom:50%;" />



`.alphaMap`：alpha贴图是一张灰度纹理，用于控制整个表面的不透明度，（黑色：完全透明；白色：完全不透明）， 默认值为null。

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209271716141.jpg" alt="alpha" style="zoom:33%;" />



```js
//纹理贴图
const geometry = new THREE.BoxGeometry(10, 10, 10, 200, 200);
//纹理加载器，以后单独写
const textureLoader = new THREE.TextureLoader();
//基本贴图
const doorTexture = textureLoader.load('./textures/course/door/color.jpg');
//透明度贴图
const alphaTexture = textureLoader.load('./textures/course/door/alpha.jpg');

const material = new THREE.MeshBasicMaterial({
    map: doorTexture,
    transparent: true,
    alphaMap: alphaTexture,
    side:THREE.FrontSide,//渲染面数，默认只渲染前面的
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### 9.3 环境遮挡贴图

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209271745910.png" alt="1" style="zoom:50%;" />



`概述`：贴图自身会有`凹凸不平`的地方，这里可以用另一种贴图实现，控制平面上不透明度实现**明暗线条**



```
.aoMap : Texture
该纹理的红色通道用作环境遮挡贴图。默认值为null。aoMap需要第二组UV。

.aoMapIntensity : Float
环境遮挡效果的强度。默认值为1。零是不遮挡效果。
```



**如何添加第二组uv呢？**

- 我们先打印一下物体，其实本身就有uv贴图，这里我们可以直接使用

![1](https://gitee.com/riskbaby/picgo/raw/master/blog/202209271742996.png)





```js
//纹理贴图
const geometry = new THREE.BoxGeometry(10, 10, 10, 200, 200);
//纹理加载器，以后单独写
const textureLoader = new THREE.TextureLoader();
//基本贴图
const doorTexture = textureLoader.load('./textures/course/door/color.jpg');

//透明度贴图
const alphaTexture = textureLoader.load('./textures/course/door/alpha.jpg');
//环境遮挡贴图
const aoTexture = textureLoader.load('./textures/course/door/ambientOcclusion.jpg');


const material = new THREE.MeshBasicMaterial({
    map: doorTexture,
    transparent: true,
    alphaMap: alphaTexture,
    aoMap: aoTexture,
    aoMapIntensity:1,//强度设置
});
//设置第二组uv贴图
geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
// console.log(geometry);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### 9.4 PBR物理渲染

`概述`：基于物理渲染的着色模型，分为**材质、灯光**，一般使用`MeshStandardMaterial`材质，下面介绍的几种贴图也以这种材质为例

`材质`：基础色、法线、高光、金属度

`灯光`：直接照明、间接照明、直接高光、间接高光、阴影、环境光闭塞



### 9.5 置换贴图

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209272003025.png" alt="1" style="zoom:50%;" />



`概述`：影响网格顶点位置，门上把手突起，和遮挡贴图的`明暗渲染`不一样

```js
//纹理贴图
const geometry = new THREE.BoxGeometry(10, 10, 10, 200, 200);
//纹理加载器，以后单独写
const textureLoader = new THREE.TextureLoader();
//基本贴图
const doorTexture = textureLoader.load('./textures/course/door/color.jpg');

//透明度贴图
const alphaTexture = textureLoader.load('./textures/course/door/alpha.jpg');
//环境遮挡贴图
const aoTexture = textureLoader.load('./textures/course/door/ambientOcclusion.jpg');
//置换贴图
const displayTexture = textureLoader.load('./textures/course/door/height.jpg');


const material = new THREE.MeshStandardMaterial({
    map: doorTexture,
    transparent: true,
    alphaMap: alphaTexture,
    aoMap: aoTexture,
    displacementMap: displayMaterial,//置换贴图
    displacementScale:0.1,
    aoMapIntensity: 1,//强度设置
    side:DoubleSide,
});
//设置第二组uv贴图
geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
// console.log(geometry);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### 9.6 粗糙贴图

`概述`：**材质的粗糙程度**，0.0表示平滑的镜面反射，1.0表示完全漫反射，要设置平行光（太阳光）

![1](https://gitee.com/riskbaby/picgo/raw/master/blog/202209272022482.png)





```js
//纹理贴图
const geometry = new THREE.BoxGeometry(10, 10, 10, 200, 200);
//纹理加载器，以后单独写
const textureLoader = new THREE.TextureLoader();
//基本贴图
const doorTexture = textureLoader.load('./textures/course/door/color.jpg');

//透明度贴图
const alphaTexture = textureLoader.load('./textures/course/door/alpha.jpg');
//环境遮挡贴图
const aoTexture = textureLoader.load('./textures/course/door/ambientOcclusion.jpg');
//置换贴图
const displayTexture = textureLoader.load('./textures/course/door/height.jpg');
//粗糙度贴图
const roughTexture = textureLoader.load('./textures/course/door/roughness.jpg');


const material = new THREE.MeshStandardMaterial({
    map: doorTexture,
    transparent: true,
    alphaMap: alphaTexture,
    aoMap: aoTexture,
    displacementMap: displayTexture,
    displacementScale:0.1,
    aoMapIntensity: 1,//强度设置
    roughnessMap: roughTexture,
    roughness:0.5,
    side:DoubleSide,
});
//设置第二组uv贴图
geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
// console.log(geometry);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### 9.7 金属贴图

`概述`：材质与金属的相似度，非金属材质如木材或石材，使用0.0，金属使用1.0， 默认值为0.0。0.0到1.0之间的值可用于生锈金属的外观。如果还提供了`metalnessMap`，则两个值相乘。

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209272026499.png" alt="1" style="zoom:50%;" />



```js
//纹理贴图
const geometry = new THREE.BoxGeometry(10, 10, 10, 200, 200);
//纹理加载器，以后单独写
const textureLoader = new THREE.TextureLoader();
//基本贴图
const doorTexture = textureLoader.load('./textures/course/door/color.jpg');

//透明度贴图
const alphaTexture = textureLoader.load('./textures/course/door/alpha.jpg');
//环境遮挡贴图
const aoTexture = textureLoader.load('./textures/course/door/ambientOcclusion.jpg');
//置换贴图
const displayTexture = textureLoader.load('./textures/course/door/height.jpg');
//粗糙度贴图
const roughTexture = textureLoader.load('./textures/course/door/roughness.jpg');
//金属贴图
const metalTexture = textureLoader.load('./textures/course/door/metalness.jpg');


const material = new THREE.MeshStandardMaterial({
    map: doorTexture,
    transparent: true,
    alphaMap: alphaTexture,
    aoMap: aoTexture,
    displacementMap: displayTexture,
    displacementScale:0.1,
    aoMapIntensity: 1,//强度设置
    roughnessMap: roughTexture,
    roughness: 0.5,
    metalnessMap: metalTexture,
    metalness: 1,
    side:DoubleSide,
});
//设置第二组uv贴图
geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
// console.log(geometry);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```



### 9.8 法线贴图

`概述`：用于创建法线贴图的纹理，不改变形状，改变光照

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209272051650.png" alt="1" style="zoom:50%;" />



```js
//纹理贴图
const geometry = new THREE.BoxGeometry(10, 10, 10, 200, 200);
//纹理加载器，以后单独写
const textureLoader = new THREE.TextureLoader();
//基本贴图
const doorTexture = textureLoader.load('./textures/course/door/color.jpg');

//透明度贴图
const alphaTexture = textureLoader.load('./textures/course/door/alpha.jpg');
//环境遮挡贴图
const aoTexture = textureLoader.load('./textures/course/door/ambientOcclusion.jpg');
//置换贴图
const displayTexture = textureLoader.load('./textures/course/door/height.jpg');
//粗糙度贴图
const roughTexture = textureLoader.load('./textures/course/door/roughness.jpg');
//金属贴图
const metalTexture = textureLoader.load('./textures/course/door/metalness.jpg');
//法线贴图
const normalTexture = textureLoader.load('./textures/course/door/normal.jpg');


const material = new THREE.MeshStandardMaterial({
    map: doorTexture,
    transparent: true,
    alphaMap: alphaTexture,
    aoMap: aoTexture,
    displacementMap: displayTexture,
    displacementScale:0.1,
    aoMapIntensity: 1,//强度设置
    roughnessMap: roughTexture,
    roughness: 0.5,
    metalnessMap: metalTexture,
    metalness: 1,
    normalMap: normalTexture,
    side:DoubleSide,
});
//设置第二组uv贴图
geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
// console.log(geometry);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### 9.9 纹理加载进度

`onLoad` — 加载完成时将调用。回调参数为将要加载的texture.
`onProgress` — 将在加载过程中进行调用。参数为XMLHttpRequest实例，实例包含total和loaded字节。
`onError` — 在加载错误时被调用。



#### 9.9.1 手动调用

```js
let event = {
    //图片加载过程中调用
    onProgress:function(e){ 
        console.log('图片加载进度');
        console.log(e);
    },
    //图片加载完成调用函数
    onLoad:function(){ 
        console.log('图片加载完成');
    },
    //图片加载出错
    onError:function(e){ 
        console.log('图片加载错误');
        console.log(e);
    },
};
//基本贴图
const doorTexture = new THREE.TextureLoader().load('./textures/course/door/color.jpg',event.onLoad,event.onProgress,event.onError);
```

#### 9.9.2 LoadingManager

`概述`：其功能是处理并跟踪已加载和待处理的数据

```js
//资源加载管理器
const manager = new THREE.LoadingManager();

//纹理加载器
const textureLoader = new THREE.TextureLoader(manager);
//开始加载图片
manager.onStart = function (url, itemsLoaded, itemsTotal) { 
    console.log(`加载资源的路径为：${url} 已经加载的数量：${itemsLoaded} 总共的数量：${itemsTotal}`);
}

//加载过程
manager.onProgress=function (url, itemsLoaded, itemsTotal) { 
    console.log(`加载资源的路径为：${url} 已经加载的数量：${itemsLoaded} 总共的数量：${itemsTotal}`);
}

//加载出错
manager.onError = function (url) { 
    console.log(`资源加载出错的资源路径为：${url}`);
}

//完成加载
manager.onLoad = function () { 
    console.log('完成加载');
}
```



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209272134116.png" alt="1" style="zoom: 80%;" />

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209272134438.png" alt="2" style="zoom:80%;" />



### 9.10 环境纹理

`概述`：将**环境的图像**贴在材质上



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209281419972.png" alt="1" style="zoom:50%;" />

```js
//场景贴图
const sphereTexture = new THREE.CubeTextureLoader().setPath('./textures/course/environmentMaps/0/');
const envTexture= sphereTexture.load([
    'px.jpg',
    'nx.jpg',
    'py.jpg',
    'ny.jpg',
    'pz.jpg',
    'nz.jpg'
]);
//场景添加背景
scene.background = envTexture;
//场景的物体添加环境贴图（无默认情况使用）
scene.environment = envTexture;

const sphereGeometry = new THREE.SphereGeometry(5, 30, 30);
const sphereMaterial = new THREE.MeshStandardMaterial({
    roughness: 0,//设置粗糙程度
    metalness: 1,//金属度
    envMap:envTexture,

});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
```



### 9.11 HDR处理

`概述`：高动态范围图像，相比普通的图像，能够提供更多的动态范围和图像细节，一般被运用于电视显示产品以及图片视频拍摄制作当中。

<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202209281446373.png" alt="1" style="zoom:67%;" />



```js
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader;
const rgbeLoader = new RGBELoader().setPath('./textures/course/hdr/');
//异步加载
rgbeLoader.loadAsync('002.hdr').then((texture) => {

    //设置加载方式 等距圆柱投影的环境贴图
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
 })
```













## 十、交互处理

### 10.1 坐标系

`概述`：坐标轴能够更好的反馈物体的位置信息，`红、绿、蓝`分别代表`x、z、y`



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202210211042060.png" alt="2" style="zoom:50%;" />



```js
const axesHelper = new THREE.AxesHelper(20);//里面的数字代表坐标抽长度
scene.add(axesHelper);
```

### 10.2 控制器

`概述`：通过鼠标控制物体和相机的`移动、旋转、缩放`

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

### 10.3 自适应

`概述`：根据屏幕大小自适应场景



```js
//自适应屏幕
window.addEventListener('resize', () => { 
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
})
```



**设置相机的宽高比、重新更新渲染相机、渲染器的渲染大小、设备的像素比**

### 10.4 全屏响应

`概述`：双击进入`全屏`，再次双击/ESC退出全屏

```js
window.addEventListener('dblclick', () => { 
    let isFullScreen = document.fullscreenElement
    if (!isFullScreen) {
        renderer.domElement.requestFullscreen()
    }
    else { 
        document.exitFullscreen()
    }
})
```



### 10.5 信息面板

`概述`；通过操作面板完成界面的`移动物体`的相关应用

`链接`：https://www.npmjs.com/package/dat.gui

```js
//安装npm
npm install --save dat.gui
//如果出现...标记错误，安装到开发依赖就可以了
npm i --save-dev @types/dat.gui
```

![1](https://gitee.com/riskbaby/picgo/raw/master/blog/202210260947852.png)

```js
//界面操作
const gui = new dat.GUI();

//操作物体位置
gui
    .add(cube.position, 'x')
    .min(0)
    .max(10)
    .step(0.1)
    .name('X轴移动')
    .onChange((value) => {
        console.log('修改的值为' + value);
    })
    .onFinishChange((value) => {
        console.log('完全停止' + value);
    });
//操作物体颜色
const colors = {
    color: '#0000ff',
};
gui
    .addColor(colors, 'color')
    .onChange((value) => {
        //修改物体颜色
        cube.material.color.set(value);
    });
```



### 10.6 频率检测



`概述`：检测帧率

**导包**

```js
import Stats from 'three/addons/libs/stats.module.js';
```

**应用**

```js
const stats = new Stats();
document.body.appendChild(stats.dom);
```

**自变化**

![20221021_110002](https://gitee.com/riskbaby/picgo/raw/master/blog/202210211102667.gif)

```js
stats.update()
```

必须在`render`函数调用`update`实时更新才奏效

### 10.7 导航网格

`概述`：底部二维平面的网格化，帮助我们更好的创建场景



<img src="https://gitee.com/riskbaby/picgo/raw/master/blog/202210211054352.png" alt="3" style="zoom:67%;" />



```js
const gridHelper = new THREE.GridHelper(10, 20)//网格大小、细分次数
scene.add(gridHelper)
```

## 十一、高级

### 11.1 动画操作

#### 11.1.1 **requestAnimationFrame**



`概述`：一帧帧`渲染`，一秒`刷新60次`



```js
function render (time) {  
    console.log(time);
    let speed = time / 1000;
    cube.position.x = speed;
    controls.update();//调用
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```



```
animate.js:54 155951.046
animate.js:54 155967.633
animate.js:54 155984.378
animate.js:54 156001.104
animate.js:54 156017.725
animate.js:54 156034.377
animate.js:54 156051.124
animate.js:54 156067.659
```

#### 11.1.2 Clock



```js
const clock = new THREE.Clock();
function render () {  
    
    // let totalTime = clock.getElapsedTime();//总时间
    // console.log(totalTime);
    let deltaTime = clock.getDelta();//间隔时间
    console.log(deltaTime);

    controls.update();//调用
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```

#### 11.1.3 Gsap（推荐）

`概述`：自由设置动画的包

**资源**：https://www.npmjs.com/package/gsap

```js
//设置gsap动画
gsap.to(cube.position, {
    x: 5, duration: 5, ease: "power1.out",
    delay:2,//延迟多久运动
    repeat: 2,
    yoyo:true,//往返运动
    onStart: () => { 
        console.log('动画开始');
    },
    onComplete: () => {
        console.log('完成动画');
     },

});
//点击旋转暂停
let rotaeAnimate = gsap.to(cube.rotation, { x: 2 * Math.PI, duration: 5, repeat: -1 });//重复多次 -1 
window.addEventListener('click', () => { 
    rotaeAnimate.pause();
})
```

#### 11.1.4 camera移动

```js
function render () { 

    //控制相机逆时针移动实现动画效果
    const timer = Date.now()*0.0003;
    camera.position.x = Math.sin(timer)*5;
    camera.position.z = Math.cos(timer)*5;

    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```





描述：vscode设置代码提示开启方法步骤
步骤：
设置->搜索->Snippets prevent取消即可

TypeScript: Disable Automatic Type Acquisition





