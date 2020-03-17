# element vue shop

## vscode小工具

+ 代码自动格式化
 - 安装ESlint插件
 - 设置保存自动代码格式化：打开setting json加入以下内容
  ```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  ```


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

![](images/readme-img/101_20200310203904.png)

+ `main.js`:入口文件

## Vue组件

### 创建一个login组件

+ 文件名称：Login.vue
+ 路径：`src/components/Login.vue`

```html
<template>
  <!-- 组件页面 -->
    <div class="vue1">
        {{ msg }}
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
   
   也可以通过进入vue ui页面下，在项目依赖，开发依赖里，搜索 less less-loader进行图形化安装，需要重启动服务

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
>1.通过name属性，为一个页面中不同的router-view渲染不同的组件,如：将上面代码的`login`渲染在 name为`login`的router-view中，将`home`渲染在name为`home`的router-view中。不设置name的将为默认的渲染组件。

```html
<template>
  <div id="app">
     <router-view></router-view>
     <router-view  name="login"></router-view> //将渲染login组件
     <router-view  name="home"></router-view>   //将渲染home组件
  </div>
</template>

```

>2.可以用name传参 使用$router.name获取组件name值

```html
 <template>
  <div id="app">
    <p>{{ $route.name }}</p> //可以获取到渲染进来的组件的name值
    <router-view></router-view>
  </div>
</template>

```

>3.用于pramas传参的引入 pramas必须用name来引入 query可以用name或者path来引入

```html
 var router = new VueRouter({
      routes: [
        { name:'register', path: '/register/:id/:name', component: register }
      ]
    })
   <router-link :to="{name:'register',params:{id:10,name:'lili'}}">注册</router-link>

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


## 编写样式

1. 编写全局容器样式，屏幕自动全屏
2. 编写login容器样式，100%高

### 编写全局容器样式

#### 建立全局css文件

+ 名称：`global.css`
+ 地址：`src/assets/css/global.css`
+ 编写全局样式内容：

 ```
 /* 全局样式表 */
 
 html, 
 body, 
 #app {
     height: 100%;
     margin: 0;
     padding: 0;
 }
 
 ```

#### 入口导入全局样式

import './assets/css/global.css'

#### 修改login的容器样式

div修改样式为：`class="login_container"`

建立一个`login_container`样式

```html
    <div class="login_container">
        {{ msg }}
    </div>	

.login_container {
    height: 100%;
    background-color: #2b4b6b;
}
```



## login登录盒子

### 登录框样式
在 login.vue页面中


```html
<div class="login_box"></div>

```

```css
.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

```

### 登录框头像样式

在上面基础上增加头像框样式

```css
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 100px;
    width: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

```

![](images/readme-img/103_20200311221819.png)

### 正式启用element-ui

### element-ui组件导入

+ 组件目录:`src/plugins/element.js`
+ 组件导入：element的组件是按需导入的，用到哪个控件导入哪控件
+ element.js里导入需要的组件

```
import Vue from 'vue'
import { Button, Form, FormItem, Input } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

```

### 登录框编写

```html
<template>
  <!-- 组件页面 -->
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png">
      </div>
      <!-- 登录表单区 -->
      <el-form  label-width="0px" class="login_form">
        <!-- 账号输入 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 密码输入 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
           <el-button type="primary">确认</el-button>
           <el-button>重置</el-button>
        </el-form-item>
      </el-form>

    </div>
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
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 100px;
    width: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box ;
}
.btns {
  display: flex;
  justify-content: flex-end;
}

</style>

```

### input图标使用
+ src/assets下建立fonts文件夹
+ 从阿里图标网上下载图标
+ 复制下载的内容到fonts文件夹中
+ main.js入口引入`import './assets/css/global.css'`
+ input控件引入图标:`<el-input prefix-icon="iconfont icon-icon-test16"></el-input>`

### 为输入框绑定数据

+ form :model="数据对象"
  
 :model等于v-bind:model的缩写，是绑定自定义属性，它只是将父组件的数据传递给子组件，并没有实现父组件和子组件数据之间的双向绑定。

+ input v-model="数据对象.属性名"

 v-model是组件与对象属性的双向绑定，对象属性改变来将直观的体现在组件中

### 表单数据合法性验证

鼠标离开组件的时候，自动验证表单的合法性，防止用户犯错，提早纠正错误

```html
      // 表单验证规则对象
      loginFormRules: {
        // 验证用户账户是否合法
        account: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 5, message: '账号长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 10, message: '账号长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
```

### 表单重置事件

+ Form Methods
+ resetFields	对整个表单进行重置，将所有字段值重置为初始值并移除校验结果

获得表单的实例对象，访问 resetFields的函数，重置表单，通过 `<el-form  ref="loginFormRef">`指定
一个ref属性，来获得实例对象。

+ 给按钮添加一个点击事件

```html
 <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
	
		
  methods: {
    // 点击重置按钮，重置表单内容
    resetLoginForm () {
      // console.log(this.$refs)
      this.$refs.loginFormRef.resetFields()
    }
  }

```

### 表单预验证

表单提交的时候，对所有所填写的项目进行预验证

+ Form Methods
+ validate	对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise	Function(callback: Function(boolean, object))
+ 给确认按钮添加login函数
```html
    login () {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          console.log('正常')
        } else {
          console.log('失败')
        }
      })
    }
```

### message提示

+ 引入Message:`import { Message } from 'element-ui';`
+ 和其他控件不一样，他需要全局挂载

+ 全局挂载Message,$message
+ `Vue.prototype.$message = Message`

```html
        if (valid) {
          console.log('正常')
          return this.$message.success('登录成功')
        } else {
          console.log('失败')
          return this.$message.error('登录失败')
        }
      })
	  
```
## 网络请求

### axios包导入

+ axios包导入
+ 挂载到Vue的原型$http上
+ 配置默认请求的地址

```html
import axios from 'axios'
// 挂载到Vue的原型$http上
Vue.prototype.$http = axios
// 配置请求的地址
axios.defaults.baseURL = 'https://wxapp.yh2j.com/api/'
// axios.defaults.baseURL = 'http://localhost:8142/api/'
```

### 网络请求

+ 在vue的函数中建立网络请求函数，编写请求事件
+ get请求

 ```html
	 login () {
		  this.$refs.loginFormRef.validate(valid => {
			console.log('login')
			if (valid) {
			  var url = '/testapi'
			  var data = {
				params: {
				  account: '7yaq55',
				  password: '1046'

				}
			  }

			  this.$http.get(url, data).then(res => {
				console.log(res.data)
				return this.$message.success('登录成功')
			  }).catch(error => {
				console.log(error)
			  })
			} else {
			  return this.$message.error('登录失败')
			}
		  })
		},
 ```

+ POST请求
 ```html
	 this.$refs.loginFormRef.validate(valid => {
			 if (valid) {
			   console.log('loginPost')
			   var url = '/testapi'
			   this.$http.post(url, this.loginForm).then(res => {
				 console.log(res.data)
				 return this.$message.success('登录成功')
			   }).catch(error => {
				 console.log(error)
			   })
			 } else {
			   return this.$message.error('登录失败')
			 }
		   })
		 }
 ```

### 客户端的sessionStorage

> TODO:需要研究前后端token机制

+ token保存到浏览器的sessionStorage
 ```html
window.sessionStorage.setItem('token', 'allen')
 ```
 
+ 跳转页面

 ```html
this.$router.push('/home')
 ```

### 路由导航守卫

未登陆状态下，访问禁止访问的页面，自动跳转到登陆页面

+ beforeEach 导航守卫
+ router/index.js下添加以下内容
 
 ```html
 // 挂载路由导航守卫
 
 router.beforeEach((to, from, next) => {
   // to 将要访问的路径
   // from 代表从哪个路径跳转而来
   // next 是一个函数，表示放行
   // next()是放行，next('/login')是强制跳转
   if (to.path === '/login') return next()
   // 获取token
   const tokenStr = window.sessionStorage.getItem('token')
   // token不存在直接跳转到login
   if (!tokenStr) return next('/login')
   // token存在，放行
   next()
 })
 ```
 
 ### 退出机制
 
 + 清空token
 + 跳转到登陆页面
 
```     logout () {
       window.sessionStorage.clear()
       this.$router.push('/login')
     }
```

## 页面布局

element-ui上找Container 布局容器
```
<el-container class="home-container">
        <!-- 头部区域 -->
    <el-header>Header</el-header>
    <!-- 页面主体区域 -->
    <el-container>
        <!-- 页面侧边栏 -->
        <el-aside width="200px">Aside</el-aside>
        <!-- 内容主题 -->
        <el-main>Main</el-main>
    </el-container>
    </el-container>
```

### 左侧菜单布局
### 通过接口获得菜单数据

通过axios请求拦截器添加token，在main.js中添加以下内容

```html
// 添加api请求头，附带token
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
})
```
### 发起请求获得左侧菜单

+ 在created的事件中，调用api接口事件
+ 访问api接口menus获取菜单接口，菜单请求返回值赋值到data数据对象menulist中

```
    async getMenuList () {
      // 获得用户左边菜单权限,采用async和await写法
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res)
```

+ 绘制菜单
+ 一级菜单for循环
```
 <el-submenu :index="item.id + '' " v-for="item in menulist" :key="item.id">
 
```
 - `:index="item.id`:绑定index唯一值，后面会变，index不接受数据，所以后面采用`+ ''`的方式拼接一个字符串
 - `v-for="item in menulist" :key="item.id"`:v-for循环出所有的一级菜单数据,绑定一个key

+ 二级菜单for循环

```
<el-menu-item :index="subitem.id + ''" v-for="subitem in item.children" :key="subitem.id">

```

+ 添加分类字体图标和子菜单激活颜色

+ 保持一个菜单打开：unique-opened是否只保持一个子菜单的展开
+ 菜单折叠和展开：collapse	是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
+ collapse-transition	是否开启折叠动画	boolean false
+ 路由占位符，内容区 `<el-main>  <router-view></router-view>`
+ 默认选中保持菜单到setion
## 用户管理

### 用户列表

绘制用户列表ui结构

+ 面包屑导航区域
+ 