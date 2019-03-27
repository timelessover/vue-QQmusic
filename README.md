# 基于Vue-cli3重写vue-QQmusic


项目预览地址：[Vue-QQmusic](https://timelessover.github.io/blog-share-cli3/dist/index.html#/)


二维码：


![](https://upload-images.jianshu.io/upload_images/8562733-157172662bba93c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/400)


### 技术栈

 - vue
 - vue-router
 - vuex
 - axios
 - mint-ui
 - vue-cli3
 - scss
 - jonsp(跨域)

<br/>

### 实现的功能
- [x] 首页
- [x] 歌手页面
- [x] 排行榜
- [x] 搜索页面(接口不稳定)
- [x] 播放器
- [x] 播放历史记录
- [x] 播放模式切换
<br/>

### 项目截图
![播放器](https://upload-images.jianshu.io/upload_images/8562733-df2f215053cf04ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)![首页](https://upload-images.jianshu.io/upload_images/8562733-74adb508015b9db5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)![歌手](https://upload-images.jianshu.io/upload_images/8562733-65623bce6f18fa6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)![搜索](https://upload-images.jianshu.io/upload_images/8562733-9097bff9fd855c5f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)


<br/>

### 项目目录结构
![结构目录](https://upload-images.jianshu.io/upload_images/8562733-067d8864c4390bd1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
<br/>
+ api存放获取后端数据的js,以及一些封装;  
+ assets主要存放静态的img、js、font、css等  
+ components主要存放公用组件  
+ page主要存放路由跳转的组件  
+ router.js存放路由  
+ store.js存放状态管理  
+ App.vue是项目根组件  
+ main.js是项目入口文件  
<br/>

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```
<br/>



