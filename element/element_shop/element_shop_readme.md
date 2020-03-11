# element vue shop

## 项目初始化

### 安装Vue脚手架

### 通过脚手架创建项目
+ vue ui
+ 创建新项目
+ 项目名称全英文

### 配置Vue路由
+ 选择预设：可以自己的预设，或手动
+ babel,router,linter/formatter,使用配置文件，打开其他都关闭先
+ use history mode 关闭
+ pick addtional lint：lint on save 开启

### 配置Element-UI库
+ 添加插件：vue-cli-plugin-element
+ 插件配置：fully import 修改为 import on demand
+ 
### 配置axios库

支持网络发起请求

+ 依赖中：安装依赖-添加依赖-搜-axios

## 后端安装

后端采用python flask

### 下载和使用postman

## 项目运行

### 启动vue ui

+ 左边工具栏：任务
+ 点击：serve
+ 点击：运行
+ 点击：启动app
+ 自动在默认浏览器启动首页

![](images/readme-img/102_20200311181546.png)

## 项目目录

项目主目录

![主目录](images/readme-img/101_20200310203904.png)

+ `main.js`:入口文件

## Vue组件

### 创建一个login组件

+ 文件名称：Login.vue
+ 路径：`src/components/Login.vue`

```html
<template>
  <!-- 组件页面 -->
    <div>
        <p class="vue1">{{ msg }}</p>
    </div>
</template>

<script>
// 组件脚本
export default {
  data () {
    return {
      msg: '我是组件msg'
    }
  }
}

</script>

<style lang="less" scoped>

.vue1 {
  background-color: palegoldenrod;
  color: green;
  font-size: 30px;
}
</style>

```

+ template

 vue的页面模板，显示页面外观
 
+ script
  
 vue的脚本，包括页面的参数，函数等
 
+ style

 页面样式，只为该页面服务，`<style lang="less" scoped>`；
 - scoped：当一个style标签拥有scoped属性时候，它的css样式只能用于当前的Vue组件，可以使组件的样式不相互污染。如果一个项目的所有style标签都加上了scoped属性，相当于实现了样式的模块化。
 - lang="less":element-ui默认less为样式表,所以编译前，需要npm安装less组件
 
   `npm install less less-loader`

### login组件注册

`src/rotuer/index.js`为该项目webpack的路由配置文件，在该文件中添加`login.vue`的路由	

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入login组件
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
```

+ 导入组件：`import Login from '../components/Login.vue'`
+ 添加路由：`{ path: '/login', name: 'login', component: Login }`
 - path:添加一条路径为`/login`的路由
 - `{ path: '/', redirect: '/login' }`代表根目录自动重定向到该login路由
 - name:路由的名称
 - componet:组件名称
 
#### 路由中name属性用法
>通过name属性，为一个页面中不同的router-view渲染不同的组件,如：将上面代码的`login`渲染在 name为`login`的router-view中，将`home`渲染在name为`home`的router-view中。不设置name的将为默认的渲染组件。

```html
<template>
  <div id="app">
     <router-view></router-view>
     <router-view  name="login"></router-view> //将渲染login组件
     <router-view  name="home"></router-view>   //将渲染home组件
  </div>
</template>

```

### app.vue引入login组件

div中<router-view></router-view>添加路由组件占位符，启动app后默认进入login路由

```html
<template>
  <div id="app">
    我是app.vue
    <!-- router-view为路由站位符,渲染到router-view -->
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>

</style>

```


