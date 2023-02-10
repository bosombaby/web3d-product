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
